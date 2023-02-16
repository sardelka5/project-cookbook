const router = require('express').Router();
const Favorites = require('../../views/Favorites');
const { Card } = require('../../db/models');

router.get('/', async (req, res) => {
  const { user } = res.locals;
  const favorites = await Card.findAll({
    raw: true,
    where: { user_id: user.id },
  });
  const arr = [];
  for (let i = 0; i < favorites.length; i += 1) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${favorites[i].dish}`
    );
    arr.push(response.json());
  }
  const data = await Promise.all(arr);
  const favoriteDish = data.map((el) => {
    let obj = {
      idMeal: el.meals[0].idMeal,
      strMealThumb: el.meals[0].strMealThumb,
      strMeal: el.meals[0].strMeal,
      arringredient: [],
    };
    for (let j = 1; j < 21; j += 1) {
      if (
        el.meals[0][`strIngredient${j}`] !== '' &&
        el.meals[0][`strIngredient${j}`] !== null
      ) {
        obj.arringredient.push(el.meals[0][`strIngredient${j}`]);
      }
    }
    return obj;
  });

  //! продумать как отбработать и добавить в объект наличие лайков из БД и во вьюшку на отрисовку

  // const newArr = favoriteDish.map(async (dish) => {
  //   const q = await Card.findOne({
  //     where: { dish: dish.idMeal, user_id: user.id },
  //   });
  //   // if (q) {
  //   //   dish.like = 1;
  //   // }
  // });

  // console.log(newArr);

  res.status(200).renderComponent(Favorites, {
    arrayRecipes: favoriteDish,
    authUser: user,
  });
});

module.exports = router;
