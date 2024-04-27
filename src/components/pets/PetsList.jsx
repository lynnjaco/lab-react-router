import React from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <Router>
      <section className="pets-wrapper">
        <PetsListNav cats={cats} dogs={dogs} />
        <Routes>
          <section className="pets-list">

            {/* All cats section */}
            <Route 
              path="/pets/cats" 
              element={ cats.map((cat) => (
                <Pet key={cat.id} kind="cat" pet={cat} />
              )) } />        

            {/* All dogs section */}
            <Route 
              path="/pets/dogs"
              element={ dogs.map((dog) => (
                <Pet key={dog.id} kind="dog" pet={dog} />
            )) } />

          </section>
        </Routes>
      </section>
    </Router>
  );
};

export default PetsList;
