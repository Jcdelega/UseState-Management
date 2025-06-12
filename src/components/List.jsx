import { useState } from "react";

const ShoppingList=()=>{
  // define the initial state for the products list and for the product
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState("");

  // Function to add a new product to the list.
  const addProduct = () => {
    if (newProduct.trim() !== "") {
      setProducts([...products, newProduct]);
      setNewProduct("");
    }
  };

  // Function to delete the product from the list
  const deleteProduct = (index) => {
    products.splice(index,1);
    setProducts([...products]);
  };

  return (
    <section className="containr m-5">
      <h2 className="text-secondary">Create your shopping list here!</h2>
      <div className="d-flex">
      <input
      className="flex-fill me-2 rounded"
        type="text"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
      />
      <button className="ms-auto p-2" onClick={addProduct}>Add to the shopping list</button>
      </div>
      <ul className="border border-warning-subtle text-secondary rounded mt-3">
        {products.map((product, index) => (
          <li className="d-flex justify-content-between m-2" key={index}>
            {product}
            <button onClick={() => deleteProduct(index)}>Delete from this list</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ShoppingList