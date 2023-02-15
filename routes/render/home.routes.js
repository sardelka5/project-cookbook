const router = require('express').Router();
const AllCards = require('../../views/AllCards');
const { Card } = require('../../db/models');

router.get('/', async (req, res) => {
  const cards = await Card.findAll({ raw: true });
  res.status(200).renderComponent(AllCards, { cards });
});

module.exports = router;
