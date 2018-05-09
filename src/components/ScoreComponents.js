import React from 'react'

const ScoreComponents = (props) => {
  return (
    <div>
      <h4>Player 1 Score: {props.player1}</h4><h4>Player 2 Score: {props.player2}</h4>
    </div>
  ) // return
} // const score

export default ScoreComponents;
