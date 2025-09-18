import "../css/NotFound.css";
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <p>¡No se encontró la página!<br/>Error 404</p>
      <Link to='/'>Volver al Menú Principal</Link>
    </div>
    
  )
}

export default NotFound;