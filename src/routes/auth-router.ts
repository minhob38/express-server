import express from 'express';
import { createHash, createToken } from '../utils/auth-util';
import { findUserByEmail, createUser } from '../queries/auth-query';
import { IResData } from '../types';

const router: express.Router = express.Router();

router.post('/signup', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const { email, password } = req.body as { email: string, password: string };
  const user = await findUserByEmail(email);

  if (user) {
    const data: IResData = {
      status: 'error',
      message: 'user already exists',
    };

    return res.status(200).json(data);
  }

  const hash: string = createHash(password);
  const insertedUser = await createUser(email, hash);
  const token: string = createToken(insertedUser.email);

  const data: IResData = {
    status: 'success',
    message: 'user signed up',
    data: { access_token: token },
  };

  return res.status(200).json(data);
});

export default router;
