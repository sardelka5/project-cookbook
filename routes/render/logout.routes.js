const router = require('express').Router();

router.get('/', (req, res) => {
  res.app.locals.user = null;
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res.clearCookie('user_sid');
    res.redirect('/home');
  });
});

module.exports = router;
