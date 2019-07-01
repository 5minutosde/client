import React from "react"
import { Link } from 'react-router-dom'

import "./Header.scss"

const header = props => {
  const userLink = props.user ? <Link to={`/${props.user}`} className="user-link">{props.user}</Link> : null
  return (
    <header className="Header">
      <div className="container">
        <Link to="/" className="logo">
          5 minutos de
        </Link>
        {userLink}
      </div>
  </header>
  )
}

export default header
