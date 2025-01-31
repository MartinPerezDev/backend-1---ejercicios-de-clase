import express from "express";

const viewsRouter = express.Router();

viewsRouter.get("/", (req, res)=>{
  res.render("index");
});

export default viewsRouter;