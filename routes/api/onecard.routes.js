const router = require('express').Router();
const OneCard = require('../../views/OneCard');
const { Card } = require('../../db/models');

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const dataForOne = await response.json();

  const oneRecipe = {
    img: dataForOne.meals[0].strMealThumb,
    name: dataForOne.meals[0].strMeal,
    instruction: dataForOne.meals[0].strInstructions,
    ingredients: [],
    idMeal: dataForOne.meals[0].idMeal,
  };

  const userId = res.locals.user.id;
  const dataFromBD = await Card.findOne({
    where: { dish: oneRecipe.idMeal, user_id: userId },
  });

  for (let j = 1; j < 21; j += 1) {
    if (
      dataForOne.meals[0][`strIngredient${j}`] !== '' &&
      dataForOne.meals[0][`strIngredient${j}`] !== null
    ) {
      oneRecipe.ingredients.push(dataForOne.meals[0][`strIngredient${j}`]);
    }
  }
  const html = res.renderComponent(
    OneCard,
    { oneRecipeObj: oneRecipe, dataFromBD },
    { htmlOnly: true }
  );

  res.json(html);
});

module.exports = router;
