export function ProductsShow(props) {
const handleSubmit = (event) => {
  event.preventDefault();
  const params = new FormData(event.target);
  props.onUpdateProduct(props.product.id, params, () => event.target.reset());
};

const handleClick = () => {
  props.onDestroyProduct(props.product.id);
};

  return (
    <div>
      <h1>Product Information</h1>
      <p>Name: {props.product.name}</p>
      <p>Price: {props.product.price}</p>
      <p>Description: {props.product.description}</p>
      <p>Inventory: {props.product.inventory}</p>
      <p>Supplier_id: {props.product.supplier_id}</p>
      <form onSubmit={handleSubmit}>
      <div>
        Name: <input defaultValue={props.product.name} name="name" type="text" />
      </div>
      <div>
        Price: <input defaultValue={props.product.price} name="price" type="text" />
      </div>
      <div>
        Description: <input defaultValue={props.product.description} name="description" type="text" />
      </div>
      <div>
        Inventory: <input defaultValue={props.product.inventory} name="inventory" type="text" />
      </div>
      <div>
        Supplier_id: <input defaultValue={props.product.supplier_id} name="supplier_id" type="text" />
      </div>
      <button type="submit">Update product</button>
      </form>
      <button onClick={handleClick}>Delete Product</button>
    </div>
  );
}