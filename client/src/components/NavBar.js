import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [show, setShow] = useState(false)

  const showSwitch = () => {
     setShow(!show)
  }

  return (
    <div className="navbar">
      <div className="logo">Krystle Mitchell</div>
      <div className={show ? 'links active' : 'links'}>
        <Link onClick={showSwitch} to="/">
          {' '}
          Home{' '}
        </Link>
        <Link onClick={showSwitch} to="/about">
          {' '}
          About{' '}
        </Link>
        <Link onClick={showSwitch} to="/projects">
          {' '}
          Projects{' '}
        </Link>
        <Link onClick={showSwitch} to="/contact">
          {' '}
          Contact{' '}
        </Link>
      </div>

      <div
        onClick={showSwitch}
        className={show ? 'bars-button active' : 'bars-button'}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default NavBar
