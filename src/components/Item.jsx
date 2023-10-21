function Item(props) {
  const itemObject = {
    title: props.title,
    image: props.image,
    price: props.price,
    inCart: false,
  };

  return (
    <div
      className="item"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={itemObject.image}
        alt={itemObject.title}
        style={{ maxWidth: "15rem" }}
      />
      <p
        style={{
          fontSize: "1vw",
          fontWeight: "500",
          textAlign: "center",
          width: "50%",
        }}
      >
        {itemObject.title}
      </p>
      <p style={{ fontSize: "1vw", fontWeight: "500", textAlign: "center" }}>
        {itemObject.price}
      </p>
    </div>
  );
}

export default Item;
