import "../css/Item.css"
import { Link } from 'react-router-dom'

function Item({prod}) {
  return (
    <div class="item">
      <h3>{prod.title}</h3>
      <img src="../public/book-placeholder.png" />
      <p>${prod.price} ARS</p>
      <Link to="/">Detalle</Link>
    </div>
  )
}

export default Item