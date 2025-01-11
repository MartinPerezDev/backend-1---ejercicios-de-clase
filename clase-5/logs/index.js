import fs from "fs";

const verifyLogFile = async(logPath) => {
  try {
    await fs.promises.access(logPath, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}

// [ fecha y hora ] ERROR - usuario no encontrado
const registerLogs = async(typeLog, msgLog) => {
  const logPath = "./data.log";
  const timestamp = new Date().toISOString();
  const logMsg = `[${timestamp}] ${typeLog} : ${msgLog} \n`;

  try{
    const logExists = await verifyLogFile(logPath);
    if(logExists){
      await fs.promises.appendFile(logPath, logMsg);
    }else{
      await fs.promises.writeFile(logPath, logMsg);
    }
  }catch(error){
    console.error(error);
  }
}

const main = async() => {
  await registerLogs("INFO", "Se inicio el servidor en el puerto 8080");
  await registerLogs("ERROR", "El usuario con id no pudo loguearse correctamente");

  const stats = await fs.promises.stat("./data.log");
  console.log(stats);
}

main()