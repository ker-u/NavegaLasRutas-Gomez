import "../css/NavBar.css"
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav>
      <a href="#">
        <img src="./logo.png" alt="Logo de Visozo Libros" />
      </a>
      <div class="links">
        <a href="#">Ofertas</a>
        <a href="#">Más vendidos</a>
        <a href="#">Nuevos</a>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
