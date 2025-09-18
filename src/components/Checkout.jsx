//El Checkout aún no valida la informacion de los campos
import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [form, setForm] = useState({ nombre: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer: form,
      items: cart,
      total: totalPrice,
      date: Timestamp.fromDate(new Date())
    };

    const ordersRef = collection(db, "orders");
    const docRef = await addDoc(ordersRef, order);

    setOrderId(docRef.id);
    clearCart();
  };

  if (orderId) {
    return <h2>¡Gracias por tu compra! Tu número de orden es: {orderId}</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Finalizar compra</button>
    </form>
  );
}

export default Checkout;