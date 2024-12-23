const Router = require("express");
const router = new Router();
const controller = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/multer");

router.post(
  "/create/:userId",
  upload.array("images", 10),
  authMiddleware,
  controller.create
);
router.post("/add-to-favorites", controller.addToFavorites);
router.post(
  "/remove-from-favorites",
  authMiddleware,
  controller.removeFromFavorites
);
router.get("/all-posts", controller.getAllPosts);

router.get("/favorites/:userId", authMiddleware, controller.getFavoritePosts);

router.get("/my-posts/:userId", authMiddleware, controller.getMyPosts);

router.get("/post/:id", controller.getPostById);

module.exports = router;
