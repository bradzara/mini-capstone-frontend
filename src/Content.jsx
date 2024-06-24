import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { ProductsShow } from "./ProductsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Modal } from "./Modal";
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleCreateProduct = (params, succesCallback) => {
    console.log("handleCreateProducts", params);
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      console.log(response.data);
      setProducts([...products, response.data]);
      succesCallback();
    });
  };

  const handleShowProduct = (product) => {
    console.log("handleShowProduct", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleUpdateProduct = (id, params, succesCallback) => {
    console.log("handleUpdateProduct", params);
    axios.patch(`http://localhost:3000/products/${id}.json, params`).then((response) => {
      setProducts(
        products.map((product) => {
          if (product.id === response.data.id) {
            return response.data;
          } else {
            return product;
          }
        })
      );
    });
  }

  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  }

  const handleDestroyProduct = (id) => {
    console.log("handleDestroyProduct", id)
    axios.delete(`http://localhost:3000/products/${id}.json`).then((response) => {
      setProducts(products.filter((photo) => prodcut.id !== id));
      handleClose();
    });
  }
  
  useEffect(handleIndexProducts, []);
  
  return (
    <main>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProductsIndex products={products} onShowProduct={handleShowProduct} />} />
        <Route path="logout" element={<LogoutLink />} />
        <Route path="/products/new" element={<ProductsNew onCreateProduct={handleCreateProduct}/>} />
      </Routes>
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsShow product={currentProduct} onUpdateProduct={handleUpdateProduct} onDestroyProduct={handleDestroyProduct}/>
      </Modal>
    </main>
  );
}