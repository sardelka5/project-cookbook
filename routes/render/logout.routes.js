const router = require('express').Router();

router.get('/', (req, res) => {
  res.locals.user = null;
  res.app.locals.meals = null;
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res.clearCookie('user_sid');
    res.redirect('/home');
  });
});

module.exports = router;
