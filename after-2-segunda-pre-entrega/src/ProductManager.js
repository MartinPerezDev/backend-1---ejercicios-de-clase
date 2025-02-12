import fs from "fs";

class ProductManager {
  constructor(pathFile) {
    this.pathFile = pathFile;
  }

  //getProducts
  getProducts = async () => {
    try {
      //leemos el contenido de nuestro archivo y lo guardamos
      const fileData = await fs.promises.readFile(this.pathFile, 'utf-8');
      const data = JSON.parse(fileData);
      return data;
    } catch (error) {
      throw new Error(`Error al leer el archivo de productos: ${error.message}`);
    }
  }

  getProductById = async (idProduct) => {
    try {
      const fileData = await fs.promises.readFile(this.pathFile, 'utf-8');
      const data = JSON.parse(fileData);
      const product = data.findIndex((prod) => prod.id === parseInt(idProduct));
      if (!product) throw new Error(`Producto con id: ${idProduct} no encontrado`);

      return product;
    } catch (error) {
      throw new Error(`Error al obtener el producto: ${error.message}`);
    }
  }

  addProduct = async (newProduct) => {
    try {
      const fileData = await fs.promises.readFile(this.pathFile, 'utf-8');
      const data = JSON.parse(fileData);
      
      newProduct.price = parseFloat(newProduct.price);
      newProduct.stock = parseInt(newProduct.stock, 10);

      //nuevo id
      const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
      const product = { id: newId, ...newProduct, status: true, thumbnail: "" }
      data.push(product);

      await fs.promises.writeFile(this.pathFile, JSON.stringify(data, null, 2), 'utf-8');
      return product;
    } catch (error) {
      throw new Error(`Error añadir el producto: ${error.message}`);
    }
  }

  setProductById = async (idProduct, updatedProduct) => {
    try {
      const fileData = await fs.promises.readFile(this.pathFile, 'utf-8');
      const data = JSON.parse(fileData);
      const productIndex = data.findIndex((prod) => prod.id === parseInt(idProduct));
      if (productIndex === -1) throw new Error(`Producto con id: ${idProduct} no encontrado`);

      data[productIndex] = { ...data[productIndex], ...updatedProduct };
      await fs.promises.writeFile(this.pathFile, JSON.stringify(data, null, 2), 'utf-8');

      return data;
    } catch (error) {
      throw new Error(`Error al actualizar el producto: ${error.message}`);
    }
  }

  deleteProductById = async(idProduct) => {
    try {
      const fileData = await fs.promises.readFile(this.pathFile, 'utf-8');
      const data = JSON.parse(fileData);
      const productIndex = data.findIndex((prod) => prod.id === parseInt(idProduct));
  
      if (productIndex === -1) throw new Error(`Producto con id: ${idProduct} no encontrado`);
      data.splice(productIndex, 1);
  
      await fs.promises.writeFile(this.pathFile, JSON.stringify(data, null, 2), 'utf-8');
  
      return data;
    } catch (error) {
      throw new Error(`Error al eliminar el producto: ${error.message}`);
    }
  }

}

export default ProductManager;