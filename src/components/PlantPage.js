import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[allPlants, setAllPlants] = useState([])

  const[searchBar, setSearchBar] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((plantDisplay) => setAllPlants(plantDisplay))
  },[])

  function handleNewPlant(newPlant){
    setAllPlants([...allPlants, newPlant])
  }

  function handleChange(e){
    e.preventDefault()
    setSearchBar(e.target.value)
  }


  function rmPlant(delPlant){
    const rmPlant = plantDisplay.filter((plant) => plant.id !== delPlant.id)
    setAllPlants(rmPlant)
  }

  function handleUpdatePrice(updatedPrice){
    const updatedItem = allPlants.map((plant) => {
      if(plant.id === updatedPrice.id){
        return updatedPrice
      } else {
        return plant
      }
    })
    setAllPlants(updatedItem)
  }

  const plantDisplay = allPlants.filter((plants) => {
    if(searchBar==="") return true

    const lowerCasePlants = plants.name.toLowerCase()
    return lowerCasePlants.includes(searchBar.toLocaleLowerCase())
  })

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant}/>
      <Search handleChange={handleChange}/>
      <PlantList plantDisplay={plantDisplay} rmPlant={rmPlant} handleUpdatePrice={handleUpdatePrice}/>
    </main>
  );
}

export default PlantPage;
