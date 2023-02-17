const router = require('express').Router();
const OneCard = require('../../views/OneCard');
const { Card } = require('../../db/models');
const fetch = require('node-fetch');

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;

  const response = fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  )
    .then((res1) => res1.json())
    .catch((err) => console.log(err.message));

  const dataForOne = await response;
  console.log(dataForOne);
  const oneRecipe = {
    img: dataForOne.meals[0].strMealThumb,
    name: dataForOne.meals[0].strMeal,
    instruction: dataForOne.meals[0].strInstructions,
    ingredients: [],
    idMeal: dataForOne.meals[0].idMeal,
  };

  for (let j = 1; j < 21; j += 1) {
    if (
      dataForOne.meals[0][`strIngredient${j}`] !== '' &&
      dataForOne.meals[0][`strIngredient${j}`] !== null
    ) {
      oneRecipe.ingredients.push(dataForOne.meals[0][`strIngredient${j}`]);
    }
  }

  if (res.locals.user) {
    const userId = res.locals.user.id;
    const dataFromBD = await Card.findOne({
      where: { dish: oneRecipe.idMeal, user_id: userId },
    });
    const html = res.renderComponent(
      OneCard,
      { oneRecipeObj: oneRecipe, dataFromBD },
      { htmlOnly: true }
    );
    res.json(html);
  } else {
    const html = res.renderComponent(
      OneCard,
      { oneRecipeObj: oneRecipe },
      { htmlOnly: true }
    );
    res.json(html);
  }
});

module.exports = router;
