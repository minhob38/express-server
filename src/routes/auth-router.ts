import express from 'express';
import {
  postSignUp,
  postSignIn,
  patchPassword,
  deleteSignOut
} from '../controllers/auth-controller';

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
 *                 data:
 *                   type: object
 *                   properties:
 *                     access_token:
 *                       type: string
 *                       description: access token
 */
router.post('/signup', postSignUp);

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
router.post('/signin', postSignIn);

/**
 * @openapi
 * /api/auth/password:
 *   patch:
 *     tags:
 *       - auth
 *     summary: change password
 *     description: change password with new password
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
 *               current_password:
 *                 description: current password
 *                 type: string
 *                 required: true
 *                 default: qwerasdf
 *               new_password:
 *                 description: new password
 *                 type: string
 *                 required: true
 *                 default: qwerasdf
 *             required:
 *               - email
 *               - current_password
 *               - new_password
 *     responses:
 *       200:
 *         description: password changed
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
 *                   description: password changed
 */
router.patch('/password', patchPassword);

/**
 * @openapi
 * /api/auth/signout:
 *   delete:
 *     tags:
 *       - auth
 *     summary: signout
 *     description: change password with new password
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
 *         description: signed out
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
 *                   description: user signed out
 */
router.delete('/signout', deleteSignOut);

export default router;
