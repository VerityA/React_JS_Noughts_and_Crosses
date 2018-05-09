import React from 'react'

const Header = (props) => {

  return (
    <div className="header">
      <h1>Let's Play Cats & Doges!!!</h1>
      <h3>{props.message}</h3>
    </div>
  ) // return
} // const score

export default Header;
