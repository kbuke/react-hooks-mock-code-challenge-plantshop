import React, { useState } from "react";

function PlantCard({plant, rmPlant, handleUpdatePrice}) {
  const[inStock, setInStock] = useState(true)

  const[newPrice, setNewPrice] =useState("")

  function handleStock(){
    setInStock(!inStock)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => rmPlant(plant))
  }

  function handleNewPrice(e){
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        price: newPrice
      })
    })
    .then((r) => r.json())
    .then((updatedPrice) => handleUpdatePrice(updatedPrice))
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p> 
      <button className={inStock? "primary" : ""} onClick={handleStock}>{inStock? "In Stock" : "Out of Stock"}</button>
      <button className="rmFlower" onClick={handleDelete}>Remove Flower</button>
      <form onSubmit={handleNewPrice}>
        <input type="text" placeholder="Set New Price" onChange={(e) => setNewPrice(e.target.value)}/>
        <button>Submit New Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
