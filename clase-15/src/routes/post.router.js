import express from "express";
import Post from "../model/post.model.js";

const postRouter = express.Router();

postRouter.post("/", async (req, res) => {
  try {
    const { userId, text } = req.body;
    const response = await Post.insertOne({ userId, text });
    res.status(201).send({ status: "success", payload: response });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

postRouter.get("/", async(req, res)=> {
  try {
    const posts = await Post.find();
    res.status(200).send({ status: "success", payload: posts });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
})

export default postRouter;