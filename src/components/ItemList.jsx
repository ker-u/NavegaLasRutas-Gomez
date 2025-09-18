import "../css/ItemList.css";
import Item from './Item';

function ItemList({ products }) {
  return (
    <section className="item-list">
      {products.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </section>
  )
}

export default ItemList