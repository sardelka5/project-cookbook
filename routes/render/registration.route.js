const bcrypt = require('bcrypt');
const router = require('express').Router();
const Registration = require('../../views/Registration');
const { User } = require('../../db/models');

router
  .route('/')
  .get((req, res) => {
    res.status(200).renderComponent(Registration);
  })
  .post(async (req, res) => {
    const { name, email, password } = req.body;

    if (name && email && password) {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        const hash = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hash });
        req.session.userId = newUser.id;
        res.status(200).json({ message: 'ok' });
      } else {
        res.status(401).json({ message: 'Такой email уже существует' });
      }
    } else {
      res.status(401).json({ message: 'Заполните все поля' });
    }
  });

module.exports = router;
