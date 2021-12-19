import express from 'express';
import { createHash, createToken } from '../utils/auth-util';
import { findUserByEmail, createUser } from '../queries/auth-query';
import { IResData } from '../types';

import { signUp, signIn } from '../controllers/auth-controller';

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
  *                data:
 *                   type: object
 *                   properties:
 *                     access_token:
 *                       type: string
 *                       description: access token
 */
router.post('/signup', signUp);

/**
 * @openapi
 * /api/auth/signin:
 *   post:
 *     tags:
 *       - auth
 *     summary: signin
 *     description: signin with email, password
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
 *         description: signed in
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
 *                   description: user signed in
 *                 data:
 *                   type: object
 *                   properties:
 *                     access_token:
 *                       type: string
 *                       description: access token
 */
router.post('/signin', signIn);

export default router;
