import express from 'express';
import {
  postPosts
} from '../controllers/board-controller';

const router: express.Router = express.Router();

/**
 * @openapi
 * /api/board/posts:
 *   post:
 *     tags:
 *       - board
 *     summary: create post
 *     description: create post with author, title, content
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               author:
 *                 description: author
 *                 type: string
 *                 default: abcde@gmail.com
 *               title:
 *                 description: title
 *                 type: string
 *                 default: express server
 *               content:
 *                 description: content
 *                 type: string
 *                 default: express server ...
 *             required:
 *               - author
 *               - title
 *               - content
 *     responses:
 *       200:
 *         description: created post
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
 *                   description: created post
 */
router.post('/posts', postPosts);

export default router;
