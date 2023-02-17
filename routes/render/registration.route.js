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
    const {
      name, email, passwordOne, passwordTwo,
    } = req.body;
    if (name && email && passwordOne && passwordOne === passwordTwo) {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        const hash = await bcrypt.hash(passwordOne, 10);
        const newUser = await User.create({ name, email, password: hash });
        req.session.userId = newUser.id;
        res.status(200).json({ message: 'ok' });
      } else {
        res.status(401).json({ message: 'User with this email address already exists' });
      }
    } else if (name && email && passwordOne && passwordOne !== passwordTwo) {
      res.status(401).json({ message: 'Passwords mismatch' });
    } else {
      res.status(401).json({ message: 'Fill in all fields' });
    }
  });

module.exports = router;
