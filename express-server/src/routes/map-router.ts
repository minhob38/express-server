import express from 'express';
import {
  getSggs,
  getSgg,
  getSggsQuery,
  getSggsAreas,
} from '../controllers/map-controller';

const router: express.Router = express.Router();

/**
 * @openapi
 * /api/map/sggs:
 *   get:
 *     tags:
 *       - map
 *     summary: find sggs
 *     description: find sggs
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: found sggs
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
 *                   description: found sggs
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       sggId:
 *                         type: number
 *                         description: sgg id
 *                       sggName:
 *                         type: string
 *                         description: sgg name
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
router.get('/sggs', getSggs);

/**
 * @openapi
 * /api/map/sggs?south={south}&west={west}&north={north}&east={east}:
 *   get:
 *     tags:
 *       - map
 *     summary: find sggs in bound
 *     description: find sggs with bound
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: south
 *         description: south latitude
 *         schema:
 *           type: number
 *         default: 37.453121
 *         required: true
 *       - in: query
 *         name: west
 *         description: west longitude
 *         schema:
 *           type: number
 *         default: 127.0485376
 *         required: true
 *       - in: query
 *         name: north
 *         description: north latitude
 *         schema:
 *           type: number
 *         default: 37.5836935
 *         required: true
 *       - in: query
 *         name: east
 *         description: east longitude
 *         schema:
 *           type: number
 *         default: 127.1192621
 *         required: true
 *     responses:
 *       200:
 *         description: found sggs in bound
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
 *                   description: found sggs in bound
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       sggId:
 *                         type: number
 *                         description: sgg id
 *                       sggName:
 *                         type: string
 *                         description: sgg name
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
router.get('/sggs', getSggsQuery);

/**
 * @openapi
 * /api/map/sggs/areas:
 *   get:
 *     tags:
 *       - map
 *     summary: find sggs' area
 *     description: find sggs' area by descending order
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: found sggs' area
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
 *                   description: found sggs' area
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       sggId:
 *                         type: number
 *                         description: sgg id
 *                       sggName:
 *                         type: string
 *                         description: sgg name
 *                       sggArea:
 *                         type: number
 *                         description: sgg area (km2)
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
router.get('/sggs/areas', getSggsAreas);

/**
 * @openapi
 * /api/map/sggs/{sggName}:
 *   get:
 *     tags:
 *       - map
 *     summary: find sgg
 *     description: find sgg with sgg name
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sggName
 *         description: sgg name
 *         schema:
 *           type: string
 *         default: 송파구
 *         required: true
 *     responses:
 *       200:
 *         description: found sgg
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
 *                   description: found sgg
 *                 data:
 *                   type: object
 *                   properties:
 *                     sggId:
 *                       type: number
 *                       description: sgg id
 *                     sggName:
 *                       type: string
 *                       description: sgg name
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
router.get('/sggs/:sggName', getSgg);

export default router;
