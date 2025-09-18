import "../css/ItemDetail.css";
import ItemCount from "./ItemCount";
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function ItemDetail({detalle}) {
  const { addToCart } = useCart();
  const handleAdd = (quantity) => {
    addToCart(detalle, quantity);
  };

  if (!detalle) return <p>Cargando Producto...</p>

  return (
    <section className="item-detail">
      <div>
        <h1>{detalle.title}</h1>
        <img src="../public/book-placeholder.png" />
        <p>Autor: {detalle.author}</p>
        <p>Stock: {detalle.stock} unidades</p>
        <p>Precio: ${detalle.price} ARS</p>
        <ItemCount stock={detalle.stock} onAdd={handleAdd} />
      </div>
      <Link to='/'>Volver al Menú Principal</Link>
    </section>
  )
}

export default ItemDetail;