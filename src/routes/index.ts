import express from 'express';
import authRouter from './auth-router';
import boardRouter from './board-router';

const router: express.Router = express.Router();

router.use('/auth', authRouter);
router.use('/board', boardRouter);

export default router;
