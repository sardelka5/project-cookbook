const router = require('express').Router();
const AllCards = require('../../views/AllCards');
const Table = require('../../views/Table');
// const { Card } = require('../../db/models');

// router.get('/', async (req, res) => {
//   const arrBlyodo = [];
//   for (let i = 0; i < 6; i++) {
//   const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
//   const data = await response.json();

//   let obj = {
//     strMealThumb: data.meals[0].strMealThumb,
//     strMeal: data.meals[0].strMeal,
//     arringredient: [],
//   };
//   for(let j = 1; j < 21; j++) {
//     if(data.meals[0][`strIngredient${j}`] !== '') {
//   obj.arringredient.push(data.meals[0][`strIngredient${j}`])
//     }
//   };
//   arrBlyodo.push(obj);
//   }
//   console.log(arrBlyodo);
//   res.status(200).renderComponent(AllCards, { arrayRecipes: arrBlyodo });
// });

// module.exports = router;

router.get('/', async (req, res) => {
  //! проверить всем!
  const { user } = res.locals;
  // const arrayRecipes = await Card.findAll({ raw: true });
  // console.log(user.name)
  // console.log(user.dataValues)

  const arrBlyodo = [];
  for (let i = 0; i < 8; i++) {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    arrBlyodo.push(response.json());
  }
  const data = await Promise.all(arrBlyodo);
  const result = data.map((el) => {
    let obj = {
      idMeal: el.meals[0].idMeal,
      strMealThumb: el.meals[0].strMealThumb,
      strMeal: el.meals[0].strMeal,
      arringredient: [],
    };
    for (let j = 1; j < 21; j++) {
      if (el.meals[0][`strIngredient${j}`] !== '') {
        obj.arringredient.push(el.meals[0][`strIngredient${j}`]);
      }
    }
    return obj;
  });
  res
    .status(200)
    .renderComponent(AllCards, { arrayRecipes: result, authUser: user });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  if (id != 'random') {
    const arrBlyodo = [];
    console.log(id);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`);
    const menu = await response.json();
    const arrmenu = menu.meals.map(el => el.idMeal);
    console.log(arrmenu);
    for (let i = 0; i < 8; i++) {
      let number = arrmenu[i];
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${number}`);
      arrBlyodo.push(response.json());
    }
    const data = await Promise.all(arrBlyodo);
    const result = data.map((el) => {
      let obj = {
        idMeal: el.meals[0].idMeal,
        strMealThumb: el.meals[0].strMealThumb,
        strMeal: el.meals[0].strMeal,
        arringredient: [],
      };
      for (let j = 1; j < 21; j++) {
        if (el.meals[0][`strIngredient${j}`] !== '') {
          obj.arringredient.push(el.meals[0][`strIngredient${j}`]);
        }
      }
      return obj;
    });
    res.status(200).renderComponent(Table, { arrayRecipes: result }, { htmlOnly: false });
  }

  if (id === 'random') {
    const arrBlyodo = [];
    for (let i = 0; i < 8; i++) {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php'
      );
      arrBlyodo.push(response.json());
    }
    const data = await Promise.all(arrBlyodo);
    const result = data.map((el) => {
      let obj = {
        idMeal: el.meals[0].idMeal,
        strMealThumb: el.meals[0].strMealThumb,
        strMeal: el.meals[0].strMeal,
        arringredient: [],
      };
      for (let j = 1; j < 21; j++) {
        if (el.meals[0][`strIngredient${j}`] !== '') {
          obj.arringredient.push(el.meals[0][`strIngredient${j}`]);
        }
      }
      return obj;
    });
    res.status(200).renderComponent(Table, { arrayRecipes: result }, { htmlOnly: false });
  }
});

module.exports = router;
