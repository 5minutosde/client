import React from "react"
import { Link } from 'react-router-dom'

import "./Card.css"

const card = props => (
  <div className="Card">
    <div className="row">
      <div className="column avatar">
        <Link to={`/${props.media.user.username}`}>
          <img src={props.media.user.avatar || `https://api.adorable.io/avatars/400/abott@adorable.io.png`} alt="" height="48" />
        </Link>
      </div>
      <div className="column">
        <div>
          <Link to={`/${props.media.user.username}/${props.media.slug}`}>{props.media.title}</Link>
        </div>
        <div>
          <Link to={`/${props.media.user.username}`}>{`@${props.media.user.username}`}</Link>
        </div>
      </div>
    </div>
    <div className="row">
      <audio preload="none" controls>
        <source src={props.media.media_audio} type="audio/ogg" />
      </audio>
    </div>
    <div className="row">
      <small>{props.media.created_at}</small>
    </div>
  </div>
)

export default card
