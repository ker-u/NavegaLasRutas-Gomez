import ItemList from "./ItemList";
import { getProducts } from "../mock/AsyncService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [data, setData] = useState([])
  const{category}= useParams()
  useEffect(()=>{
    getProducts()
    .then((res)=>{
      if(category){
        setData(res.filter((prod)=> prod.category === category))
      }else{
        setData(res)
      }
    })
    .catch((error)=> console.log(error))
  },[category])

  console.log(data, 'data')
  return (
    <div>
      <h1>¡Bienvenido a Visozo Libros!</h1>
      <ItemList data={data}/>
    </div>
  );
}
  
export default ItemListContainer;