import fs from "fs";

class ProductManager{
  constructor(pathFile){
    this.pathFile = pathFile;
  }

  //getProducts
  getProducts = async() => {
    try {
      //leemos el contenido de nuestro archivo y lo guardamos
      const fileData = await fs.promises.readFile(this.pathFile, 'utf-8');
      const data = JSON.parse(fileData);
      return data;
    } catch (error) {
      throw new Error(`Error al leer el archivo de productos: ${error.message}`)
    }
  }

  //getProductById

  //addProduct

  //setProductById

  //deleteProductById

}

export default ProductManager;