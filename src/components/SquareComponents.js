import React from 'react'
import Square from './Square.js'

const SquareComponents = (props) => {
  const squareNodes = props.squares.map((square, index) => {
    return <Square className="shape" square={square} handlePress={props.handlePress} key={index}/>
  });

  return (
    <div className={props.className}>
      {squareNodes}
    </div>
  ) //return
}// const


export default SquareComponents;
