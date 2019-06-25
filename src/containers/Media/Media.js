import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";

import Database from '../../Database';

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      medias: [],
      mediaTitle: 'Loading...',
      username: 'Loading...'
    }
  }

  findOneMedia = async (user, mediaSlug) => {
    return Database.ref('audios')
    .orderByChild("user/username")
    .equalTo(user)
    .once('value')
    .then(function(snapshot) {
      const response = snapshot.val() || null;
      const json = Object.keys(response)
      const mediaId = json.filter(function(media) {
        return response[media].slug === mediaSlug
      })
      return [response[mediaId]]
    })
  }

  async componentDidMount() {
    const { user, mediaSlug } = this.props.match.params
    const medias = await this.findOneMedia(user, mediaSlug)
    this.setState({ medias, username: user, mediaTitle: medias[0].title })
  }

  render() {
    return (
      <div>
        <Header user={this.state.username} />
        <Hero title={`${this.state.mediaTitle}`} subtitle="Áudios:" />
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
