function CartWidget() {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        🛒
        <span style={{
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '0.2rem 0.5rem',
          marginLeft: '0.5rem'
        }}>
          3
        </span>
      </div>
    );
  }
  
  export default CartWidget;
  