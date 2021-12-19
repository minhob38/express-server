import express from 'express';

const router: express.Router = express.Router();

router.post('/signup', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const { email, password } = req.body as { email: string, password: string };

  return res.status(200).json({
    a: 'hello',
  });
});

export default router;
