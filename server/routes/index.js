const Router = require("express");

const router = new Router();

const authRouter = require("./authRouter");
const recipeRouter = require("./postRouter");

router.use("/auth", authRouter);
router.use("/posts", recipeRouter);

module.exports = router;
