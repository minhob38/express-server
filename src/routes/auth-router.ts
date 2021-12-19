import express from 'express';
import { createHash, createToken } from '../utils/auth-util';
import { findUserByEmail, createUser } from '../queries/auth-query';
import { IResData } from '../types';

import { signUp } from '../controllers/auth-controller';

const router: express.Router = express.Router();

/**
 * @openapi
 * /api/auth/signup:
 *   post:
 *     tags:
 *       - auth
 *     summary: signup
 *     description: signup with email, password
 *     requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 description: email
 *                 type: string
 *                 default: abcde@gmail.com
 *               password:
 *                 description: password
 *                 type: string
 *                 required: true
 *                 default: qwerasdf
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: signed up
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: success
 *                 message:
 *                   type: string
 *                   description: user signed up
 */
router.post('/signup', signUp);

router.post('/signin', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
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
