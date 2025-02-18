import express from "express";
import Post from "../model/post.model.js";

const viewsRouter = express.Router();

viewsRouter.get("/", async(req, res) => {
  try {
    const posts = await Post.find().lean();
    res.render("home", { posts });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
})

viewsRouter.get("/register", (req, res)=> {
  res.render("register");
})

viewsRouter.get("/post", (req, res)=> {
  res.render("post");
})

export default viewsRouter;