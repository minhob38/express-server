export {};

const Router = require('express').Router;

const router = Router();

router.get('/signup', (req, res, next) => {
  return res.status(200).json({
    a: 'hello',
  });
});

module.exports = router;
