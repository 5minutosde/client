import React, { Component } from "react";
import axios from 'axios'
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      medias: []
    }
  }

  componentDidMount() {
    axios.get(`https://fiveminutes-5655c.firebaseio.com/audios.json`)
    .then(res => {
      const response = Object.keys(res.data).map((key, index) => {
        return res.data[key]
      })
      const medias = response.reverse().filter((media) => {
        return media.media_audio
      })
      console.log(medias)
      this.setState({ medias })
    })
    .catch(err => {
      console.error({ err })
    })
  }

  render() {

    return (
      <div>
        <Header />
        <Hero title="5 minutos de" subtitle="Sejam bem vindos" />
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
