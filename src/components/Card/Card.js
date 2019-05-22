import React from "react";
import { Link } from 'react-router-dom'

import "./Card.css";

const card = props => (
  <div className="Card">
    <div className="row">
      <div className="column avatar">
        <Link to="/user">
          <img src="https://api.adorable.io/avatars/400/abott@adorable.io.png" alt="" height="48" />
        </Link>
      </div>
      <div className="column">
        <div>
          <Link to="/user/audio">Título do post</Link>
        </div>
        <div>
          <Link to="/user">@usuariodoguri</Link>
        </div>
      </div>
    </div>
    <div className="row">
      <audio preload="none" controls>
        <source src="{media}" type="audio/ogg" />
      </audio>
    </div>
    <div className="row">
      <small>23/12/2019</small>
    </div>
  </div>
);

export default card;
