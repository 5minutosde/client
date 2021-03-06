import React from "react"
import { Link } from 'react-router-dom'

import "./Card.scss"

const card = props => (
  <div className="Card">
    <div className="row">
      <div className="column avatar">
        <Link to={`/${props.media.user.username}`}>
          <img src={props.media.user.avatar || props.media.user.username} alt="" height="48" />
        </Link>
      </div>
      <div className="column">
        <h3 class="card-title">
          <Link to={`/${props.media.user.username}/${props.media.slug}`}>{props.media.title}</Link>
        </h3>
        <div>
          <Link to={`/${props.media.user.username}`}>{`@${props.media.user.username}`}</Link>
        </div>
      </div>
    </div>
    <div className="row">
      <audio preload="none" controls>
        <source src={props.media.media_audio} preload="none" type="audio/ogg" />
      </audio>
    </div>
    <div className="row date">
      <small>{props.media.created_at}</small>
    </div>
  </div>
)

export default card
