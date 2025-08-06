const products = [
  {
    id: 1,
    title: "El poder del ahora",
    author: "Eckhart Tolle",
    category: "nuevos",
    price: 7000,
    stock: 15
  },
  {
    id: 2,
    title: "Los 7 hábitos de la gente altamente efectiva",
    author: "Stephen Covey",
    category: "mas-vendidos",
    price: 8500,
    stock: 20
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    category: "ofertas",
    price: 5500,
    stock: 10
  },
  {
    id: 4,
    title: "El Alquimista",
    author: "Paulo Coelho",
    category: "mas-vendidos",
    price: 8000,
    stock: 8
  },
  {
    id: 5,
    title: "Sapiens: De animales a dioses",
    author: "Yuval Noah Harari",
    category: "nuevos",
    price: 9500,
    stock: 12
  },
  {
    id: 6,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    category: "ofertas",
    price: 6000,
    stock: 5
  }
];

export const getProducts = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject('Hubo un error, intente mas tarde');
      } else {
        resolve(products);
      }
    }, 1000);
  });
};

export const getOneProduct = (id) => {
  return new Promise ((resolve)=>{
      setTimeout(()=>{
        const oneProduct = products.find((prod) => prod.id === Number(id));
          resolve(oneProduct)
      }, 500)
  })
}   