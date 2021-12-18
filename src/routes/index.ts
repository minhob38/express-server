export {};

const Router = require('express').Router
const authRouter = require('./auth-router')

const router = Router();

router.use('/auth', authRouter);

module.exports = router
