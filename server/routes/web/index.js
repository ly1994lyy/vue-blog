module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const jwt = require("jsonwebtoken");
  const Category = require("../../models/Category");
  const Article = require("../../models/Article");
  const User = require("../../models/User");
  const Comment = require("../../models/Comment");
  const Like = require("../../models/Like");
  const About = require("../../models/About");
  const Other = require("../../models/Other");
  const FriendLink = require("../../models/FriendLink");
  const authMiddleWare = require("../../middleware/auth");

  //分类接口
  router.get("/categories", async (req, res) => {
    const model = await Category.find();
    res.send(model);
  });

  router.get("/categories/:id", async (req, res) => {
    const model = await Category.findById(req.params.id)
      .populate({ path: "articlelist", populate: { path: "likes" } })
      .lean();
    res.send(model);
  });

  //文章接口
  router.get("/articles", async (req, res) => {
    const { page, pageNum } = req.query;
    const skipPage = parseInt(pageNum * (page - 1));
    const total = await Article.count()
    const model = await Article.find()
      .populate("categories")
      .populate({ path: "likes" })
      .skip(skipPage)
      .limit(parseInt(pageNum))
      .lean();
    res.send({model,total});
  });

  router.get("/articles/:id", async (req, res) => {
    const model = await Article.findById(req.params.id)
      .populate({ path: "comments", populate: "commenter" })
      .populate({ path: "likes" })
      .populate("categories")
      .lean();
    res.send(model);
  });

  //用户注册接口
  router.post("/register", async (req, res) => {
    const { username, password, passwordConfirm } = req.body;
    const useIsValid = await User.findOne({ username });
    if (useIsValid) {
      return res.status(422).send({
        message: "用户名已存在！",
      });
    }
    if (password === passwordConfirm) {
      const model = await User.create({ username, password });
      res.send(model);
    } else {
      return res.status(422).send({
        message: "两次密码不一样！",
      });
    }
  });

  //友链接口
  router.get("/friendlink", async (req, res) => {
    const model = await FriendLink.find();
    res.send(model);
  });

  //评论接口
  router.post(
    "/comment",
    authMiddleWare(app.get("userKey"), User),
    async (req, res) => {
      const model = await Comment.create(req.body);
      res.send(model);
    }
  );

  //点赞取消赞接口
  router.post(
    "/like",
    authMiddleWare(app.get("userKey"), User),
    async (req, res) => {
      const model = await Like.create(req.body);
      res.send(model);
    }
  );

  router.delete(
    "/like/:userId/:artId",
    authMiddleWare(app.get("userKey"), User),
    async (req, res) => {
      const model = await Like.findOneAndDelete({
        user: req.params.userId,
        article: req.params.artId,
      });
      res.send(model);
    }
  );

  //关于作者接口
  router.get("/about", async (req, res) => {
    const model = await About.find();
    res.send(model);
  });

  //其他作品接口
  router.get("/other", async (req, res) => {
    const model = await Other.find();
    res.send(model);
  });

  //用户登录接口
  router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username })
      .populate({ path: "likes" })
      .lean();
    if (!user) {
      return res.status(422).send({
        message: "用户名不存在！",
      });
    }
    const isValid = require("bcrypt").compareSync(password, user.password);
    if (!isValid) {
      return res.status(422).send({
        message: "密码错误",
      });
    }
    const token = jwt.sign(
      { id: user._id, username: user.username },
      app.get("userKey")
    );
    res.send({ token });
  });
  app.use("/web/api", router);
};
