import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

function ItemListContainer() {
  const [data, setData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const productsRef = collection(db, "productos");
    const q = category ? query(productsRef, where("category", "==", category)) : productsRef;

    getDocs(q).then((snapshot) => {
      const productos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(productos);
    });
  }, [category]);

  console.log(data, 'data')
  return (
    <div>
      <h1>¡Bienvenido a Visozo Libros!</h1>
      <ItemList products={data}/>
    </div>
  );
}
  
export default ItemListContainer;