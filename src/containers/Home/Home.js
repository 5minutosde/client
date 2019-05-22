import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";

function Home() {

  return (
    <div>
      <Header />
      <Hero title="5 minutos de" subtitle="Sejam bem vindos" />
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
