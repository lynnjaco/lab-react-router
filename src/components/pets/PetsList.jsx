import React from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PetsList = ({ pets }) => {

  const { animal } = useParams();
  const navigate = useNavigate();

  useEffect( () => {
    if(!animal) {
      navigate("/pets/cats");
    }
  }, [])

  console.log(animal);
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
      <section className="pets-wrapper">
        <PetsListNav cats={cats} dogs={dogs} />
        <section className="pets-list" >              
          { animal === "cats" ? 
            cats.map((cat) => (
              <Pet key={cat.id} kind="cat" pet={cat} />
                ))

            : animal === "dogs" ? 
              dogs.map((dog) => (
                <Pet key={dog.id} kind="dog" pet={dog} />
                )) 
                
            : "Page Not Found"
          }
        </section>
      </section>
  );
};

export default PetsList;
