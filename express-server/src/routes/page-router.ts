import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const router: express.Router = express.Router();

router.get(
  '/home',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const current = new Date();

    const currentDateTime = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate(),
      hour: current.getHours(),
      minute: current.getMinutes(),
      second: current.getSeconds(),
    };

    return res.status(200).render('home', currentDateTime);
  }
);

export default router;
