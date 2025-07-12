import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem',
      backgroundColor: '#f4f4f4',
      borderBottom: '1px solid #ccc'
    }}>
      <h1>Visozo Libros</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="#">Ofertas</a>
        <a href="#">Más vendidos</a>
        <a href="#">Nuevos</a>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
