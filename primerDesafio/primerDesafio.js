class ProductManager {
  #products;
  static idCounter = 0;
  constructor(title, description, price, thumbnail, code, stock) {
    this.#products = [];
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
  addProduct(title, description, price, thumbnail, code, stock) {
    if (
      title == undefined ||
      description == undefined ||
      price == undefined ||
      thumbnail == undefined ||
      code == undefined ||
      stock == undefined
    )
      return console.log("Todos los campos son obligatorios");
    if (this.#products.find((p) => p.code === code))
      return console.log("Codigo de producto existente");
    const newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id: ++ProductManager.idCounter,
    };
    this.#products.push(newProduct);
    return console.log("Producto agregado con exito ");
  }
  getProducts() {
    return console.log(this.#products);
  }
  getProductById(pid) {
    const productFound = this.#products.find((p) => p.id === pid);
    if (productFound) {
      console.log(productFound);
    } else {
      console.log("El id producto no existe");
    }
  }
}
const productManager = new ProductManager();

productManager.addProduct(
  "Casco Smith",
  "Casco de Enduro",
  "120000",
  "/images/casco.png",
  "1",
  5
);
productManager.addProduct(
  "Guantes BlueGrass",
  "Guantes para mtb",
  "25000",
  "/images/guantes.png",
  "2",
  5
);
productManager.addProduct(
  "Zapatillas Ride Concept",
  "Zapatillas mtb plataforma",
  "130000",
  "/images/zapatillas.png",
  "2",
  5
);
productManager.addProduct(
  "Pedales",
  "Pedales plataforma",

  "/images/pedales.png",
  "3",
  5
);

productManager.getProductById(3);
productManager.getProducts();
