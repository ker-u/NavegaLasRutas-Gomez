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
        <Link to="/categoria/ofertas">Ofertas</Link>
        <Link to="/categoria/mas-vendidos">Más vendidos</Link>
        <Link to="/categoria/nuevos">Nuevos</Link>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
