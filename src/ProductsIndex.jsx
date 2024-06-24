export function ProductsIndex(props) {
  return (
    <div>
      <h1>All products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <img src={product.images[0] ? product.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} alt="" />
          <h2>{product.name}</h2>
          <h2>{product.price}</h2>
          <h2>{product.supplier_id}</h2>
          <button onClick={() => props.onShowProduct(product)}>More info</button>
        </div>
      ))}
    </div>
  );
}