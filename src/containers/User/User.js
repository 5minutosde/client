import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import UserTab from "../../components/UserTab/UserTab";

function User() {
  return (
    <div>
      <Header user="@linocente"/>
      <Hero title="@linocente" subtitle="Áudios:" />
      <UserTab></UserTab>
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default User;
