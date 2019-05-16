import React from "react";
import "./Card.css";

const card = props => (
  <div class="Card">
    <div class="row">
      <div class="column avatar">
        <img
          src="https://api.adorable.io/avatars/400/abott@adorable.io.png"
          alt=""
          height="48"
        />
      </div>
      <div class="column">
        <div>Título do post</div>
        <div>@usuariodoguri</div>
      </div>
    </div>
    <div class="row">
      <audio preload="none" controls>
        <source src="{media}" type="audio/ogg" />
      </audio>
    </div>
    <div class="row">
      <small>23/12/2019</small>
    </div>
  </div>
);

export default card;
