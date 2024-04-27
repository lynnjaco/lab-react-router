import React from "react";
import "./Highlights.css";

export const Highlights = ({ employees, owners, pets }) => {
  return (
    <section className="highlights">
      <article>
        <p className="numerical">{employees.length}</p>
        <p>Pawesome staff members!</p>
      </article>
      <article>
        <p className="numerical">{pets.length}</p>
        <p>Furry children supported!</p>
      </article>
      <article>
        <p className="numerical">{owners.length}</p>
        <p>Absolutely purrfect clients!</p>
      </article>
    </section>
  );
};

export default Highlights;
