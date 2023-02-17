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
  const { user } = res.locals;

  const arrBlyodo = [];
  for (let i = 0; i < 8; i += 1) {
    const response = fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    ).then((res1) => res1.json());
    arrBlyodo.push(response);
  }
  const data = await Promise.all(arrBlyodo);
  const result = data.map((el) => {
    const obj = {
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
  res.app.locals.data = 'Random dishes';
  res.app.locals.meals = result;

  res.status(200).renderComponent(AllCards, {
    arrayRecipes: result,
    authUser: user,
    category: 'Random dishes',
  });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { meals } = res.app.locals;

  if (id === 'MinToMax') {
    // console.log(res.locals);
    // console.log(req.session)
    // res.locals.data = meals

    const sortedMeals = meals
      .slice()
      .sort((a, b) => a.arringredient.length - b.arringredient.length);

    res.status(200).json({
      html: res.renderComponent(
        Table,
        { arrayRecipes: sortedMeals, category: res.app.locals.data },
        { htmlOnly: true }
      ),
    });
  }

  if (id === 'MaxToMin') {
    const sortedMeals = meals
      .slice()
      .sort((a, b) => b.arringredient.length - a.arringredient.length);

    res.status(200).json({
      html: res.renderComponent(
        Table,
        { arrayRecipes: sortedMeals, category: res.app.locals.data },
        { htmlOnly: true }
      ),
    });
  }

  if (id !== 'Random dishes' && id !== 'MaxToMin' && id !== 'MinToMax') {
    res.app.locals.data = id;
    const arrBlyodo = [];
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
    );
    const menu = await response.json();
    const arrmenu = menu.meals.map((el) => el.idMeal);

    for (let i = 0; i < 8; i += 1) {
      const number = arrmenu[i];
      const response1 = fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${number}`
      ).then((res2) => res2.json());
      arrBlyodo.push(response1);
    }
    const data = await Promise.all(arrBlyodo);
    const result = data.map((el) => {
      const obj1 = {
        idMeal: el.meals[0].idMeal,
        strMealThumb: el.meals[0].strMealThumb,
        strMeal: el.meals[0].strMeal,
        arringredient: [],
      };
      for (let j = 1; j < 21; j += 1) {
        if (el.meals[0][`strIngredient${j}`] !== '') {
          obj1.arringredient.push(el.meals[0][`strIngredient${j}`]);
        }
      }
      return obj1;
    });

    res.app.locals.meals = result;

    res.status(200).json({
      html: res.renderComponent(
        Table,
        { arrayRecipes: result, category: res.app.locals.data },
        { htmlOnly: true }
      ),
    });
  }

  if (id === 'Random dishes') {
    res.locals.data = id;
    const arrBlyodo = [];
    for (let i = 0; i < 8; i += 1) {
      const response = fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php'
      ).then((res3) => res3.json());
      arrBlyodo.push(response);
    }
    const data = await Promise.all(arrBlyodo);
    const result = data.map((el) => {
      const obj = {
        idMeal: el.meals[0].idMeal,
        strMealThumb: el.meals[0].strMealThumb,
        strMeal: el.meals[0].strMeal,
        arringredient: [],
      };
      for (let j = 1; j < 21; j += 1) {
        if (el.meals[0][`strIngredient${j}`] !== '') {
          obj.arringredient.push(el.meals[0][`strIngredient${j}`]);
        }
      }
      return obj;
    });

    res.app.locals.meals = result;

    res.status(200).json({
      html: res.renderComponent(
        Table,
        { arrayRecipes: result, category: res.app.locals.data },
        { htmlOnly: true }
      ),
    });
  }
});

module.exports = router;
