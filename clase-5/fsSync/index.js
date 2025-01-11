import fs from "fs";

//leer archivo
const readFile = (pathFile) => {
  try{
    const data = fs.readFileSync(pathFile, "utf-8");
    console.log(data)
  }catch(error){
    console.error(error)
  }
}

//sobreescribir
const writeFile = (pathFile) => {
  try {
    fs.writeFileSync(pathFile, "Nuevo contenido");
    console.log("Archivo modificado correctamente");
  } catch (error) {
    console.error(error)
  }
}

const appendFile = (pathFile) => {
  try {
    fs.appendFileSync(pathFile, "\nNueva Linea")
    console.log("Texto nuevo agregado correctamente")
  } catch (error) {
    console.error(error)
  }
}

const existsFile = (pathFile) => {
  if(fs.existsSync(pathFile)){
    console.log("el archivo existe");
  }else{
    console.log("el archivo no existe");
  }
}

existsFile("./texto2.txt")