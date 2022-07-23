import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
import AddItem from "./components/AddItem";

function App() {
  const products = [
    {
      price: 99999 ,
      name : "IPhone 10S Max ",
      quantity: 0,
    },
    {
      price: 9999 ,
      name: "Redmi Note 10S Max ",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products)=>{
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  return (
    <>
    <div>
      <AddTodo/>
    </div>
      <Navbar />
      <main className="container mt-2">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;









// import React, { useState } from 'react';

export const AddTodo =(props) => {

const [title,setTitle]=useState("");
const [desc,setDesc]=useState("");

const submit=(e)=>{
e.preventDefault();
 if(!title || !desc){
    alert("title or discrioption cant be blanked");
//console.log("title or discrioption cant be blanked");
}

    }


  return (
    <div className="container my-3">
        <h3>Add a Todo </h3>
    

        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="title" class="form-label">Todo Title</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} class="form-control" id="title" aria-describedby="emailHelp" />

           </div>
          <div className="mb-3">
            <label htmlFor="desc" class="form-label">Discription</label>
            <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} class="form-control" id="desc" />
          </div>
         
          <button type="submit" style={{border:'2px solid black'}} class="btn btn-sm btn-danger">Add_Todo</button>
        </form>
      
  

    </div>
  )
}