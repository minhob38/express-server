import express from "express";
import authRouter from "./auth-router";
import boardRouter from "./board-router";
import testRouter from "./test-router";

const router: express.Router = express.Router();

router.use("/auth", authRouter);
router.use("/board", boardRouter);
router.use("/test", testRouter);

export default router;
