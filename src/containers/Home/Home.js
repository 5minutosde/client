import React, { Component } from "react";
import axios from 'axios'
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";

import Database from '../../Database';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      medias: []
    }
  }

  findBySlug = async (slug) => {
    return Database.ref('audios')
    .orderByChild("slug")
    .equalTo(slug)
    .once('value')
    .then(function(snapshot) {
      const response = snapshot.val() || null;
      const id = Object.keys(response)[0]
      return response[id]
    })
  }

  findHomeMedias = async (user, mediaSlug) => {
    const howToUse = await this.findBySlug('o-que-e-o-5-minutos-por-linocente')
    const welcome = await this.findBySlug('welcome-por-little-war')
    return [ howToUse, welcome ]
  }

  async componentDidMount() {
    const medias = await this.findHomeMedias()
    this.setState({ medias })
  }

  render() {

    return (
      <div>
        <Header />
        <Hero title="Bem vindos aos 5 minutos" />
        <div className="container">
          { this.state.medias.map((media, key) =>
            <Card media={media} key={key} />
          )}
        </div>
      </div>
    )
  }
}

export default Home;
