import express from "express";
import { engine } from "express-handlebars";
import viewsRouter from "./routes/views.router.js";

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

//handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//endpoints
app.use("/", viewsRouter);

app.listen(8080, () => {
  console.log("Servidor iniciado en: http://localhost:8080");
})