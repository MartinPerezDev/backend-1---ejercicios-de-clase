import express from "express";

const viewsRouter = express.Router();

const users = [
  { name: "Francisco", lastName: "Cruz", email: "francisco@gmail.com", phone: 1121212121, isAdmin: true },
  { name: "Sebastian", lastName: "Piñero", email: "sebastian@gmail.com", phone: 1121212121, isAdmin: false },
  { name: "Alan", lastName: "Sinicco", email: "alan@gmail.com", phone: 1121212121, isAdmin: true }
]

viewsRouter.get("/", (req, res) => {
  const randNumber = Math.floor(Math.random() * users.length);
  const selectedUser = users[randNumber];
  res.render("index", { users, selectedUser, style: "index.css" });
})

viewsRouter.get("/register", (req, res)=> {
  res.render("register", { style: "register.css" })
})

viewsRouter.post("/user", (req, res)=> {
  const { name, lastName, email, phone } = req.body;

  users.push({ name, lastName, email, phone, isAdmin: false });
  //si sale todo bien, redirigimos hacia la pagina de home
  res.redirect("/");
})

export default viewsRouter;