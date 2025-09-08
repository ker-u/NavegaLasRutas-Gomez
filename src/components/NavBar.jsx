import "../css/NavBar.css";
import CartWidget from './CartWidget';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function NavBar() {
  const { totalItems } = useCart();

  return (
    <nav>
      <Link to="/">
        <img src="./logo.png" alt="Logo de Visozo Libros" />
      </Link>
      <div className="links">
        <Link to="/categoria/ofertas">Ofertas</Link>
        <Link to="/categoria/mas-vendidos">Más vendidos</Link>
        <Link to="/categoria/nuevos">Nuevos</Link>
      </div>
      <CartWidget totalItems={totalItems} />
    </nav>
  );
}

export default NavBar;