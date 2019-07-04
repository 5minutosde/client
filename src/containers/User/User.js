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
      user: {
        username: 'Carregando...'
      }
    }
  }

  findUser = async (user) => {
    return Database.ref('users')
    .orderByChild("username")
    .equalTo(user)
    .once('value')
    .then(function(snapshot) {
      const response = snapshot.val() || null
      const id = Object.keys(response)[0]
      return response[id]
    })
  }

  findMedias = async (user) => {
    return Database.ref('audios')
    .orderByChild("user/username")
    .equalTo(user)
    .once('value')
    .then(function(snapshot) {
      const response = snapshot.val() || null
      const json = Object.keys(response)
      const medias = json.map(function(media) {
        return response[media]
      })
      return medias
    })
  }

  async componentDidMount() {
    const username = this.props.match.params.user
    const user = await this.findUser(username)
    const medias = await this.findMedias(username)

    this.setState({ user, medias })
  }

  render() {
    const { medias, user } = this.state

    return (
      <div>
        <Header user={user.username} />
        <Hero title={`@${user.username}`} subtitle="Áudios:" />
        <div className="container">
          { medias.map((media, key) =>
            <Card media={media} key={key} />
          )}
        </div>
      </div>
    )
  }
}

export default User
