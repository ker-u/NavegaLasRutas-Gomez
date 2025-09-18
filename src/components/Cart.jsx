import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) return <p>El carrito está vacío</p>;

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.title} x {item.quantity} = ${item.price * item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to='/checkout'>Continuar</Link>
    </div>
  );
}

export default Cart;