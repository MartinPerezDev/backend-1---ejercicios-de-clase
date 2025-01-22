import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const pathFile = path.dirname(__filename);
const __dirname = path.resolve(pathFile, "../../");

export default __dirname;