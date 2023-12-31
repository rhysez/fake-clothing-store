function Item(props) {
  const itemObject = {
    title: props.title,
    image: props.image,
    price: props.price,
    quantity: props.quantity,
  };

  return (
    <div className='item'>
      <img
        src={itemObject.image}
        alt={itemObject.title}
        style={{ maxWidth: '15rem' }}
      />
      <p className='item-title'
        style={{
          fontSize: '1.5rem',
          fontWeight: '500',
          textAlign: 'center',
          width: '50%',
        }}
      >
        {itemObject.title}
      </p>
      <p className='item-price' style={{ fontSize: '1.5rem', fontWeight: '500', textAlign: 'center' }}>£{itemObject.price}</p>
      <div className='item-inputs'>
        <input type="number" style={{width: '25%'}} id={props.selector}/>
        {props.submit}
      </div>
    </div>
  );
}

export default Item;
