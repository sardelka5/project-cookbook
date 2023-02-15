const router = require('express').Router();
const bcrypt = require('bcrypt');
const Login = require('../../views/Login');
const { User } = require('../../db/models');

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
        res.status(200).json({ message: 'Wrong email or password ' });
      }
    } else {
      res.status(400).json({ message: 'Please fill in email and password' });
    }
  });

module.exports = router;
