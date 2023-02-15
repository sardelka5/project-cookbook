const router = require('express').Router();
const Login = require('../../views/Login');
const { User } = require('../../db/models');
const bcrypt = require('bcrypt');

router
  .route('/')
  .get((req, res) => {
    res.status(200).renderComponent(Login);
  })
  .post(async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      const candidate = await User.findOne({ where: { email }, raw: true });

      if (candidate && (await bcrypt.compare(password, candidate.password))) {
        req.session.userId = candidate.id;
        res.status(200).json({ message: 'ok' });
      } else {
        res.status(200).json({ message: 'Email или пароль введены неверно' });
      }
    } else {
      res.status(400).json({ message: 'Введите данные' });
    }
  });

module.exports = router;
