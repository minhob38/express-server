import express from 'express';

const Router = express.Router;

const router = Router();

router.get('/signup', (req, res, next) => {
  return res.status(200).json({
    a: 'hello',
  });
});

export default router;
