import express from 'express';
import {
  postPost,
  getPosts,
  getPost,
  patchPost,
  deletePost,
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
 *       500:
 *         description: internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: error
 *                 message:
 *                   type: string
 *                   description: internal server error
 */
router.post('/posts', postPost);

/**
 * @openapi
 * /api/board/posts:
 *   get:
 *     tags:
 *       - board
 *     summary: find posts
 *     description: find posts
 *     responses:
 *       200:
 *         description: found posts
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
 *                   description: found posts
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       postId:
 *                         type: number
 *                         description: post id
 *                       author:
 *                         type: string
 *                         description: author
 *                       title:
 *                         type: string
 *                         description: title
 *                       content:
 *                         type: string
 *                         description: content
 *                       createdAt:
 *                         type: string
 *                         description: created at
 *                       updatedAt:
 *                         type: string
 *                         description: updated at
 *       500:
 *         description: internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: error
 *                 message:
 *                   type: string
 *                   description: internal server error
 */
router.get('/posts', getPosts);

/**
 * @openapi
 * /api/board/posts/{postId}:
 *   get:
 *     tags:
 *       - board
 *     summary: find post
 *     description: find post with post id
 *     parameters:
 *       - in: path
 *         name: postId
 *         description: post id
 *         schema:
 *           type: string
 *         default: 1
 *         required: true
 *     responses:
 *       200:
 *         description: found post
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
 *                   description: found post
 *                 data:
 *                   type: object
 *                   properties:
 *                     postId:
 *                       type: number
 *                       description: post id
 *                     author:
 *                       type: string
 *                       description: author
 *                     title:
 *                       type: string
 *                       description: title
 *                     content:
 *                       type: string
 *                       description: content
 *                     createdAt:
 *                       type: string
 *                       description: created at
 *                     updatedAt:
 *                       type: string
 *                       description: updated at
 *       500:
 *         description: internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: error
 *                 message:
 *                   type: string
 *                   description: internal server error
 */
router.get('/posts/:postId', getPost);

/**
 * @openapi
 * /api/board/posts/{postId}:
 *   patch:
 *     tags:
 *       - board
 *     summary: find post
 *     description: edit post with post id, content
 *     parameters:
 *       - in: path
 *         name: postId
 *         description: post id
 *         schema:
 *           type: string
 *         default: 1
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 description: content
 *                 type: string
 *                 default: express server is based on nodejs ...
 *             required:
 *               - content
 *     responses:
 *       200:
 *         description: edited post
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
 *                   description: edited post
 *       500:
 *         description: internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: error
 *                 message:
 *                   type: string
 *                   description: internal server error
 */
router.patch('/posts/:postId', patchPost);

/**
 * @openapi
 * /api/board/posts/{postId}:
 *   delete:
 *     tags:
 *       - board
 *     summary: find post
 *     description: delete post with post id
 *     parameters:
 *       - in: path
 *         name: postId
 *         description: post id
 *         schema:
 *           type: string
 *         default: 1
 *         required: true
 *     responses:
 *       200:
 *         description: deleted post
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
 *                   description: deleted post
 *       500:
 *         description: internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: error
 *                 message:
 *                   type: string
 *                   description: internal server error
 */
router.delete('/posts/:postId', deletePost);

export default router;
