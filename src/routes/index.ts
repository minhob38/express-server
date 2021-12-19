import express from 'express';
import authRouter from './auth-router';

const router: express.Router = express.Router();

router.use('/auth', authRouter);

export default router;
