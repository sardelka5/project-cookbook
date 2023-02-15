const router = require('express').Router();
const AllCards = require('../../views/AllCards');
const { Card } = require('../../db/models');

router.get('/', async (req, res) => {
  const arrayRecipes = await Card.findAll({ raw: true });
  res.status(200).renderComponent(AllCards, { arrayRecipes });
});

module.exports = router;
