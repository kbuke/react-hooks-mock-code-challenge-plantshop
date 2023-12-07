import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantDisplay, rmPlant, handleUpdatePrice}) {
  return (
    <ul className="cards">
      {plantDisplay.map((plant) => (
        <PlantCard key={plant.id} plant={plant} rmPlant={rmPlant} handleUpdatePrice={handleUpdatePrice}/>
      ))}
    </ul>
  );
}

export default PlantList;
