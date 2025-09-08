import "../css/ItemList.css";
import Item from './Item';

function ItemList({data}) {
  return (
    <section className="item-list">
      {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </section>
  )
}

export default ItemList