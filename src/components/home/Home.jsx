import React from "react";
import Highlights from "./Highlights";
import NewsletterForm from "./NewsletterForm";
import splashImage from "./andrew-s-unsplash.jpg";
import "./Home.css";

export const Home = ({ employees, owners, pets }) => {
  return (
    <main>
      <section className="splash-image">
        <img src={splashImage} alt="Splash." />
        <Highlights employees={employees} owners={owners} pets={pets} />
        <NewsletterForm />
      </section>
    </main>
  );
};

export default Home;
