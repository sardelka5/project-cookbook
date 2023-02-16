const router = require('express').Router();
const { Card } = require('../../db/models');

router.route('/:id')
.post(async(req, res) => {
    const { id } = req.params;
    const userId = res.locals.user.id;
    console.log(id);

    const result = await Card.create({ user_id: userId, dish: id });

    if(result.dataValues.id) {
        res.status(200).json('ok');
    } else res.status(401).json('ne ok');
})

.delete(async(req, res) => {
    const { id } = req.params;
    const userId = res.locals.user.id;
    console.log(id);

    const result = await Card.destroy({ where: { user_id: userId, dish: id } });

     console.log(result);

    if(result === 1) {
        res.status(200).json('ok');
    } else res.status(401).json('ne ok');
})

module.exports = router;