import React, { Component } from "react"
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import Card from "../../components/Card/Card"

import Database from '../../Database'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      medias: [],
      mediaTitle: 'Loading...',
      username: 'Loading...'
    }
  }

  findOneMedia = async (mediaSlug) => {
    return Database.ref('audios')
    .orderByChild("slug")
    .equalTo(mediaSlug)
    .once('value')
    .then(function(snapshot) {
      const response = snapshot.val() || null;
      const id = Object.keys(response)[0]
      return [response[id]]
    })
  }

  async componentDidMount() {
    const { user, mediaSlug } = this.props.match.params
    const medias = await this.findOneMedia(mediaSlug)
    this.setState({ medias, username: user, mediaTitle: medias[0].title })
  }

  render() {
    return (
      <div>
        <Header user={this.state.username} />
        <Hero title={`${this.state.mediaTitle}`} subtitle="Áudio:" />
        <div className="container">
          { this.state.medias.map((media, key) =>
            <Card media={media} key={key} />
          )}
        </div>
      </div>
    )
  }
}

export default User
