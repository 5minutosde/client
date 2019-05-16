import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";

function App() {
  return (
    <div>
      <Header />
      <Hero title="Título" subtitle="lol" />
      <div class="container">
        <Card />
      </div>
    </div>
  );
}

export default App;
