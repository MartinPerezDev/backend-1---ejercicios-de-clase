import fs from "fs"
import crypto from "crypto";

const secretKey = "miclavesecreta";

class UsersManager {
  static users = [];
  static pathFile = "./users.json";

  static initialize = async () => {
    try {
      const fileData = await fs.promises.readFile(this.pathFile, "utf-8");
      this.users = JSON.parse(fileData);
      console.log("Datos cargados correctamente!");
    } catch (error) {
      console.error(error);
    }
  }

  static hashPassword = (password) => {
    const hashedPassword = crypto.createHmac("sha256", secretKey).update(password).digest("hex");
    return hashedPassword;
  }

  static createUser = async (user) => {
    const hashedPassword = this.hashPassword(user.password);
    const newUser = { ...user, password: hashedPassword };
    this.users.push(newUser);

    await this.saveUsers();
    console.log("Usuario creado correctamente!");
  }

  static showUsers = () => {
    console.table(this.users);
  }

  static validateUser = (username, password) => {
    const userFind = this.users.find((user) => user.userName === username);
    if (!userFind) return "Usuario no encontrado";

    const hashedPassword = this.hashPassword(password);
    if (userFind.password !== hashedPassword) return "Error, Contraseña incorrecta";

    return "Logueado Correctamente";
  }

  static saveUsers = async () => {
    try {
      await fs.promises.writeFile(this.pathFile, JSON.stringify(this.users, null, 2), "utf-8");
    } catch (error) {
      console.error("Error al guardar usuario en json");
    }
  }

}

const main = async () => {
  await UsersManager.initialize()
  /*
  await UsersManager.createUser({
    firstName: "Moises",
    lastName: "Aguilar",
    userName: "moisesaguilar01",
    password: "micontraseña01"
  })

  await UsersManager.createUser({
    firstName: "Javier",
    lastName: "Bichara",
    userName: "javier01",
    password: "micontraseña01"
  })
*/
  UsersManager.showUsers()

  console.log(UsersManager.validateUser("moisesaguilar01", "micontraseña01"))
  console.log(UsersManager.validateUser("moisesaguilar", "micontraseña01"))

}

main()