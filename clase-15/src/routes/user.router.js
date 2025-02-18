import express from "express"
import User from "../model/user.model.js"

const userRouter = express.Router();

userRouter.post("/", async(req, res)=> {
  try {
    const { name, profilePic } = req.body;

    const user = await User.insertOne({ name, profilePic });
    res.status(201).send({ status: "success", payload: user });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
})

export default userRouter;