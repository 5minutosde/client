import React from "react"
import "./Hero.css"

const hero = ({ title, subtitle }) => (
  <section className="Hero">
    <div className="container">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </div>
  </section>
)

export default hero
