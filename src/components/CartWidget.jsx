import { Link } from "react-router-dom";
import "../css/CartWidget.css";

function CartWidget({ totalItems }) {
  return (
    <Link to="/cart" className="cart">
      🛒
      {totalItems > 0 && <span>{totalItems}</span>}
    </Link>
  );
}

export default CartWidget;