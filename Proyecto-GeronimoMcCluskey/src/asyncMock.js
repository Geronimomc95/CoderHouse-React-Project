const products = [
  // Electrónica
  { id: "1", name: "Smartphone", img: "../public/smartphone.jpg", price: 500, category: "electrónica", description: "Un teléfono inteligente", stock: 15 },
  { id: "2", name: "Laptop", img: "../public/laptop.jpg", price: 1200, category: "electrónica", description: "Una laptop potente", stock: 8 },
  { id: "3", name: "Smartwatch", img: "../public/smartwatch.jpg", price: 300, category: "electrónica", description: "Un reloj inteligente", stock: 20 },
  // Ropa
  { id: "4", name: "Camisa", img: "../public/camisa.jpg", price: 40, category: "ropa", description: "Una camisa elegante", stock: 30 },
  { id: "5", name: "Pantalón", img: "../public/pantalon.jpg", price: 60, category: "ropa", description: "Un pantalón cómodo", stock: 25 },
  { id: "6", name: "Abrigo", img: "../public/abrigo.jpg", price: 100, category: "ropa", description: "Un abrigo para el frío", stock: 20 },
  // Hogar
  { id: "7", name: "Mesa de centro", img: "../public/mesacentro.jpg", price: 150, category: "hogar", description: "Una mesa elegante", stock: 10 },
  { id: "8", name: "Lámpara de pie", img: "../public/lamparapie.jpg", price: 80, category: "hogar", description: "Lámpara moderna", stock: 15 },
  { id: "9", name: "Sillón reclinable", img: "../public/sillonreclinable.jpg", price: 300, category: "hogar", description: "Sillón cómodo", stock: 5 },
];


  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 1000);
      } else {
        reject("No hay productos disponibles");
      }
    });
  };

  export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        const product = products.find( p => p.id === id);
        
        setTimeout(() => {
          if(!product) {
            reject(`No se encuentra el productos con el identificador ${id}`)
          }
          resolve(product);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };