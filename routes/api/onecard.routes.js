const router = require('express').Router();
const OneCard = require('../../views/OneCard');

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
  };

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
    { oneRecipeObj: oneRecipe },
    { htmlOnly: true }
  );

  res.json(html);
});

module.exports = router;