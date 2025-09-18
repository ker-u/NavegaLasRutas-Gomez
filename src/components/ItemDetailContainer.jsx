import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

function ItemDetailContainer() {
  const [detalle, setDetalle] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const docRef = doc(db, "productos", id);

    getDoc(docRef).then((snapshot) => {
      if (snapshot.exists()) {
        setDetalle({ id: snapshot.id, ...snapshot.data() });
      } else {
        navigate("/NotFound");
      }
    });
  }, [id, navigate]);

  if (!detalle) {
    return <p>⏳ Cargando...</p>;
  }

  return <ItemDetail detalle={detalle} />;
}

export default ItemDetailContainer;
