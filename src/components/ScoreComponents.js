import React from 'react'

const ScoreComponents = (props) => {
  return (
    <div className="score-box">
      <h4 className="score">Player 1 Score: {props.player1}</h4><h4 className="score">Player 2 Score: {props.player2}</h4>
    </div>
  ) // return
} // const score

export default ScoreComponents;
