import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantDisplay}) {
  return (
    <ul className="cards">
      {plantDisplay.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
