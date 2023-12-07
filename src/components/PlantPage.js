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

  const plantDisplay = allPlants.filter((plants) => {
    if(searchBar==="") return true

    const lowerCasePlants = plants.name.toLowerCase()
    return lowerCasePlants.includes(searchBar.toLocaleLowerCase())
  })

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant}/>
      <Search handleChange={handleChange}/>
      <PlantList plantDisplay={plantDisplay}/>
    </main>
  );
}

export default PlantPage;
