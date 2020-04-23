module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const Category = require("../../models/Category");
  const Article = require("../../models/Article");
  const AdminUser = require("../../models/AdminUser");
  const User = require("../../models/User");
  const Other = require("../../models/Other");
  const About = require("../../models/About");
  const FriendLink = require("../../models/FriendLink");
  const bcrypt = require("bcrypt");
  const jwt = require("jsonwebtoken");
  const authMiddleWare = require("../../middleware/auth");
  const multer = require("multer");

  //分类增删改查
  router.post("/categories", async (req, res) => {
    const { name } = req.body;
    const isValid = await Category.findOne({ name });
    if (isValid) {
      return res.status(422).send({
        message: "分类名称已存在！",
      });
    }
    const model = await Category.create(req.body);
    res.send(model);
  });

  router.get("/categories/:id", async (req, res) => {
    const model = await Category.findById(req.params.id);
    res.send(model);
  });

  router.get("/categories", async (req, res) => {
    const { searchWord } = req.query;
    const model = await Category.find({ name: new RegExp(searchWord) });
    res.send(model);
  });

  router.put("/categories/:id", async (req, res) => {
    const model = await Category.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  });

  router.delete("/categories/:id", async (req, res) => {
    await Category.findByIdAndDelete(req.params.id, req.body);
    res.send({
      type: "success",
      message: "删除成功!",
    });
  });

  //文章增删改查
  router.post("/articles", async (req, res) => {
    const { title } = req.body;
    const isValid = await Article.findOne({ title });
    if (isValid) {
      return res.status(422).send({
        message: "文章标题已存在！",
      });
    }
    const model = await Article.create(req.body);
    res.send(model);
  });

  router.get("/articles", async (req, res) => {
    const { searchWord } = req.query;
    const model = await Article.find({
      title: new RegExp(searchWord),
    }).populate("categories");
    res.send(model);
  });

  router.get("/articles/:id", async (req, res) => {
    const model = await Article.findById(req.params.id);
    res.send(model);
  });

  router.put("/articles/:id", async (req, res) => {
    const model = await Article.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  });

  router.delete("/articles/:id", async (req, res) => {
    await Article.findByIdAndDelete(req.params.id, req.body);
    res.send({
      type: "success",
      message: "删除成功!",
    });
  });

  //其他作品接口
  router.get("/other", async (req, res) => {
    const model = await Other.find();
    res.send(model);
  });

  router.get("/other/:id", async (req, res) => {
    const model = await Other.findById(req.params.id);
    res.send(model);
  });

  router.post("/other", async (req, res) => {
    const model = await Other.create(req.body);
    res.send(model);
  });

  router.put("/other/:id", async (req, res) => {
    const model = await Other.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  });
  //关于作者接口
  router.get("/about", async (req, res) => {
    const model = await About.find();
    res.send(model);
  });

  router.get("/about/:id", async (req, res) => {
    const model = await About.findById(req.params.id);
    res.send(model);
  });

  router.post("/about", async (req, res) => {
    const model = await About.create(req.body);
    res.send(model);
  });

  router.put("/about/:id", async (req, res) => {
    const model = await About.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  });

  //友情链接接口
  router.get("/friendlink", async (req, res) => {
    const model = await FriendLink.find();
    res.send(model);
  });

  router.get("/friendlink/:id", async (req, res) => {
    const model = await FriendLink.findById(req.params.id);
    res.send(model);
  });

  router.post("/friendlink", async (req, res) => {
    const model = await FriendLink.create(req.body);
    res.send(model);
  });

  router.put("/friendlink/:id", async (req, res) => {
    const model = await FriendLink.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  });

  router.delete("/friendlink/:id", async (req, res) => {
    const model = await FriendLink.findByIdAndDelete(req.params.id);
    res.send({ type: "success", message: "删除成功!" });
  });

  //用户接口
  router.get("/user", async (req, res) => {
    const { username } = req.query;
    const model = await User.find({ username: new RegExp(username) });
    res.send(model);
  });

  router.delete("/user/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send({
      type: "success",
      message: "删除成功!",
    });
  });

  app.use(
    "/admin/api/rest",
    authMiddleWare(app.get("adminKey"), AdminUser),
    router
  );

  //上传图片接口
  const upload = multer({ dest: __dirname + "/../../uploads" });
  app.post("/admin/api/upload", upload.single("file"), async (req, res) => {
    const file = req.file;
    file.url = `http://localhost:4000/uploads/${file.filename}`;
    res.send(file);
  });

  //登录接口
  app.post("/admin/api/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await AdminUser.findOne({ username });
    if (!user) res.status(401).send({ message: "用户名不存在!" });
    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) res.status(401).send({ message: "密码错误!" });
    const token = jwt.sign({ id: user._id }, app.get("adminKey"));
    res.send({ token });
  });
};
