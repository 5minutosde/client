import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";

function Media() {
  return (
    <div>
      <Header user="@linocente"/>
      <Hero title="Obrigado pelo feedback @granjissima" subtitle="@littlewar" />
      <div className="container">
        <Card />
      </div>
    </div>
  );
}

export default Media;
