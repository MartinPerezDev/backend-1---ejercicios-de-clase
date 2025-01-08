import crypto from "crypto";

const secretKey = "miclavesecreta";

class UsersManager{
  static users = [];

  static hashPassword = (password) => {
    const hashedPassword = crypto.createHmac("sha256", secretKey).update(password).digest("hex");
    return hashedPassword;
  }

  static createUser = (user) => {
    const hashedPassword = this.hashPassword(user.password);
    const newUser = { ...user, password: hashedPassword };
    this.users.push(newUser);

    console.log("Usuario creado correctamente!");
  }

  static showUsers = () => {
    console.log(this.users);
  }

  static validateUser = (username, password) => {
    const userFind = this.users.find( (user) => user.userName === username );
    if(!userFind) return "Usuario no encontrado";

    const hashedPassword = this.hashPassword(password);
    if(userFind.password !== hashedPassword) return "Error, Contraseña incorrecta";

    return "Logueado Correctamente";
  }

}

UsersManager.createUser( {
  firstName: "Moises",
  lastName: "Aguilar",
  userName: "moisesaguilar01",
  password: "micontraseña01"
 } )

UsersManager.showUsers()

console.log(UsersManager.validateUser("moisesaguilar01", "micontraseña01"))
console.log(UsersManager.validateUser("moisesaguilar", "micontraseña01"))