import "../css/ItemDetail.css";
import { Link } from 'react-router-dom';

function ItemDetail({detalle}) {
  if (!detalle) return <p>Cargando Producto...</p>

  return (
    <section class="item-detail">
      <div>
        <h1>{detalle.title}</h1>
        <img src="../public/book-placeholder.png" />
        <p>Autor: {detalle.author}</p>
        <p>Stock: {detalle.stock} unidades</p>
        <p>Precio: ${detalle.price} ARS</p>
      </div>
      <Link to='/'>Volver al Menú Principal</Link>
    </section>
  )
}

export default ItemDetail