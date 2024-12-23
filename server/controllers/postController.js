const { User, Post, Favorite } = require("../models/index");

class PostController {
  async create(req, res) {
    try {
      const {
        title,
        description,
        address,
        price,
        email,
        phone,
        username,
        category,
        subcategory,
      } = req.body;

      const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);
      const post = await Post.create({
        user_id: req.user.id,
        title,
        description,
        address,
        price,
        email,
        phone,
        username,
        images: JSON.stringify(imagePaths),
        category,
        subcategory,
      });
      return res.json(post);
    } catch (e) {
      console.log(e);
    }
  }

  async addToFavorites(req, res) {
    try {
      const { userId, postId } = req.body;

      const user = await User.findOne({ where: { id: userId } });
      const post = await Post.findOne({ where: { id: postId } });

      if (!user || !post) {
        return res
          .status(404)
          .json({ message: "Пользователь или рецепт не найден" });
      }

      const existingFavorite = await Favorite.findOne({
        where: { user_id: userId, post_id: postId },
      });

      if (existingFavorite) {
        await existingFavorite.destroy();
        return res.json({ message: "Рецепт удалён из избранного" });
      } else {
        await Favorite.create({ user_id: userId, post_id: postId });
        return res.json({ message: "Рецепт добавлен в избранное!!аываыввыыв" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  }

  async removeFromFavorites(req, res) {
    try {
      const { userId, postId } = req.body;
      const user = await User.findOne({ where: { id: userId } });
      const post = await Post.findOne({ where: { id: postId } });
      await user.removePost(post);
      return res.json({ message: "Рецепт удален из избранного" });
    } catch (e) {
      console.log(e);
    }
  }

  async getAllPosts(req, res) {
    try {
      const posts = await Post.findAll();

      const parsedPosts = posts.map((post) => ({
        ...post.dataValues,
        images: post.images ? JSON.parse(post.images) : [],
      }));
      return res.json(parsedPosts);
    } catch (e) {
      console.log(e);
    }
  }

  async getMyPosts(req, res) {
    try {
      const posts = await Post.findAll({ where: { user_id: req.user.id } });
      return res.json(posts);
    } catch (e) {
      console.log(e);
    }
  }

  async getFavoritePosts(req, res) {
    try {
      const { userId } = req.params;

      const user = await User.findOne({
        where: { id: userId },
        include: {
          model: Post,
          through: { attributes: [] },
        },
      });

      if (!user) {
        return res.status(404).json({ message: "Пользователь не найден" });
      }

      return res.json(user.posts);
    } catch (error) {
      console.error("Ошибка при получении избранных рецептов:", error);
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  }

  async getPostById(req, res) {
    try {
      const post = await Post.findOne({ where: { id: req.params.id } });

      if (post) {
        const parsedPost = {
          ...post.dataValues,
          images: JSON.parse(post.images),
        };
        return res.json(parsedPost);
      }
      return res.json(post);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new PostController();
