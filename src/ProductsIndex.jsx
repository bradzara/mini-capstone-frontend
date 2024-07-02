import { useState } from "react"

export function ProductsIndex(props) {
  console.log(props, "props");
  const [searchTerm, setSeachTerm] = useState("");

  return (
    <div id="products-index">
      <h1>All products</h1>
      <p>Search: 
        <input 
        type="text" 
        value={searchTerm} 
        onChange={event => setSeachTerm(event.target.value)} 
        placeholder="Search for items..." 
        list="titles" />
        </p>
      <datalist id="titles">
        {props.products.map(product =>
          <option key={product.id}>{product.name}</option>
        )}
      </datalist>
      <div className="cards">
        {props.products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map(product => (
          <div key={product.id}>
            <img src={product.images[0] ? product.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} class="img-thumbnail" alt="..."></img>
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
            <h2>{product.supplier_id}</h2>
            <button onClick={() => props.onShowProduct(product)}>More info</button>
          </div>
      ))}
      </div>
    </div>
  );
}