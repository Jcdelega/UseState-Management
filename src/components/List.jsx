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
  const eliminarProducto = (index) => {
    if(index < products.length && index >= 0){
        products.splice(index,1);
        setProducts([...products]);
    }
    else console.log(`There is not product for the choosen index ${index}`);
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <input
        type="text"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
      />
      <button onClick={addProduct}>Add to the shopping list</button>
      <ul>
        {products.map((producto, index) => (
          <li key={index}>
            {producto}
            <button onClick={() => eliminarProducto(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList