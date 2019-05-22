import React, { Component } from "react";
import axios from 'axios'
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";

class User extends Component {

  constructor(props) {
    super(props)
    this.state = {
      medias: [],
      mediaTitle: 'Loading...',
      user: 'Loading...'
    }
  }

  componentDidMount() {
    const { user, mediaSlug } = this.props.match.params
    axios.get(`https://fiveminutes-5655c.firebaseio.com/audios.json`)
    .then(res => {
      const response = Object.keys(res.data).map((key, index) => {
        return res.data[key]
      })
      const medias = response.filter((media) => {
        return media.slug === mediaSlug
      })
      this.setState({ medias, user, mediaTitle: mediaSlug })
    })
    .catch(err => {
      console.error({ err })
    })
  }

  render() {

    return (
      <div>
        <Header user={this.state.user} />
        <Hero title={`@${this.state.mediaTitle}`} subtitle="Áudios:" />
        <div className="container">
          { this.state.medias.map((media, key) =>
            <Card media={media} key={key} />
          )}
        </div>
      </div>
    )
  }
}

export default User;
