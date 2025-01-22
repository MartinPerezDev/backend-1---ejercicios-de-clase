import multer from "multer";
import __dirname from "./dirname.js";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(__dirname + "/public/img"));
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  }
})

//creamos el middleware
const uploader = multer({ storage });

export default uploader;