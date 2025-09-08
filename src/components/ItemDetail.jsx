import "../css/ItemDetail.css";
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function ItemDetail({detalle}) {
  const { addToCart } = useCart();

  if (!detalle) return <p>Cargando Producto...</p>

  return (
    <section className="item-detail">
      <div>
        <h1>{detalle.title}</h1>
        <img src="../public/book-placeholder.png" />
        <p>Autor: {detalle.author}</p>
        <p>Stock: {detalle.stock} unidades</p>
        <p>Precio: ${detalle.price} ARS</p>
        <button onClick={() => addToCart(detalle, 1)}>Agregar al carrito</button>
      </div>
      <Link to='/'>Volver al Menú Principal</Link>
    </section>
  )
}

export default ItemDetail