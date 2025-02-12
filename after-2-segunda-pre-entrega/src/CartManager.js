import fs from 'fs';

class CartManager {
  constructor(pathFile) {
    this.pathFile = pathFile;
  }

  addCart = async () => {
    try {
      const fileData = await fs.promises.readFile(this.pathFile, 'utf-8');
      const carts = JSON.parse(fileData);

      // Determinar el nuevo ID autoincrementable
      const newId = carts.length > 0 ? carts[carts.length - 1].id + 1 : 1;

      // Crear el nuevo carrito
      const newCart = {
        id: newId,
        products: []
      };

      carts.push(newCart);
      await fs.promises.writeFile(this.pathFile, JSON.stringify(carts, null, 2), 'utf-8');

      return carts;
    } catch (error) {
      throw n
    }
  }

  getCartById = async (idCart) => {
    try {
      const fileData = await fs.promises.readFile(this.pathFile, 'utf-8');
      const carts = JSON.parse(fileData);

      // Buscar el carrito por su ID
      const cart = carts.find(cart => cart.id === parseInt(idCart));

      if (!cart) throw new Error(`Carrito con id: ${idCart} no encontrado`);

      // Devolver los productos del carrito
      return cart.products;
    } catch (error) {
      throw new Error(`Error al obtener el carrito: ${error.message}`);
    }
  }

  addProductInCartById = async (idCart, product) => {
    try {
      const fileData = await fs.promises.readFile(this.pathFile, 'utf-8');
      const carts = JSON.parse(fileData);

      // Buscar el carrito por su ID
      const cart = carts.find(cart => cart.id === parseInt(idCart));

      if (!cart) throw new Error(`Carrito con id: ${idCart} no encontrado`);

      // Añadir los productos al carrito
      cart.products.push(product);

      // Guardar el contenido actualizado de carts en el archivo JSON
      await fs.promises.writeFile(this.pathFile, JSON.stringify(carts, null, 2), 'utf-8');

      return cart;
    } catch (error) {
      throw new Error(`Error al añadir productos al carrito: ${error.message}`);
    }
  }
}

export default CartManager;