import "../css/NavBar.css";
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img src="./logo.png" alt="Logo de Visozo Libros" />
      </Link>
      <div class="links">
        <Link to="/">Ofertas</Link>
        <Link to="/">Más vendidos</Link>
        <Link to="/">Nuevos</Link>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
