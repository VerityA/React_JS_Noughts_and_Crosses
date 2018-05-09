import React, {Component} from 'react';
import ScoreComponents from '../components/ScoreComponents.js'
import SquareComponents from '../components/SquareComponents.js'
import ClearBoard from '../components/ClearBoard.js'
import Header from '../components/Header.js'

class GameContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPlayer: 1,
      player1Score: 0,
      player2Score: 0,
      winningPlayer: null,
      winningMessage: null,
      squares: [
        {id: 1, playedBy: null, imgSrc: "blue_square.png"},
        {id: 2, playedBy: null, imgSrc: "blue_square.png"},
        {id: 3, playedBy: null, imgSrc: "blue_square.png"},
        {id: 4, playedBy: null, imgSrc: "blue_square.png"},
        {id: 5, playedBy: null, imgSrc: "blue_square.png"},
        {id: 6, playedBy: null, imgSrc: "blue_square.png"},
        {id: 7, playedBy: null, imgSrc: "blue_square.png"},
        {id: 8, playedBy: null, imgSrc: "blue_square.png"},
        {id: 9, playedBy: null, imgSrc: "blue_square.png"}
      ]
    }
    this.changePlayer = this.changePlayer.bind(this)
    this.handleSquarePress = this.handleSquarePress.bind(this)
    this.clearBoard = this.clearBoard.bind(this)
    this.setWinningMessage = this.setWinningMessage.bind(this)
  }

  changePlayer() {
    if(this.state.currentPlayer === 1){
      this.setState({currentPlayer: 2})
    }
    else {
      this.setState({currentPlayer: 1})
    }
  }

  handleSquarePress(event) {
    const tempState = this.state;
    if (this.hasSquareBeenPlayed(tempState.squares[event.target.value -1])) return
    // console.log("test");


    if(this.state.currentPlayer === 1){
      tempState.squares[event.target.value -1].playedBy = 1
      tempState.squares[event.target.value -1].imgSrc = "Doge.png"
    }
    else {
      tempState.squares[event.target.value -1].playedBy = 2
      tempState.squares[event.target.value -1].imgSrc = "cat_face.jpg"
    }

    this.setState(tempState);
    this.gameWon();
    this.changePlayer();
  }

  updatePlayerScore(){
    const tempState = this.state

    if(this.state.winningPlayer === 1){
      tempState.player1Score ++
    } else if
    (this.state.winningPlayer === 2){
      tempState.player2Score ++
    }

    this.setState(tempState);
  }

  setWinningMessage() {
    if(this.state.winningPlayer === null) return
    const tempState = this.state

    if(this.state.winningPlayer === 1) {
    tempState.winningMessage = "Woohoo, Player 1 wins!"
    } else {
    tempState.winningMessage = "Woohoo, Player 2 wins!"
    }

    this.setState(tempState)
  }

  hasSquareBeenPlayed(square) {
      if(square.imgSrc !== "blue_square.png") return true
  }

  clearBoard(){
    const tempState = this.state

    tempState.currentPlayer = 1
    tempState.winningPlayer = null
    tempState.winningMessage = null
    tempState.squares = [
        {id: 1, playedBy: null, imgSrc: "blue_square.png"},
        {id: 2, playedBy: null, imgSrc: "blue_square.png"},
        {id: 3, playedBy: null, imgSrc: "blue_square.png"},
        {id: 4, playedBy: null, imgSrc: "blue_square.png"},
        {id: 5, playedBy: null, imgSrc: "blue_square.png"},
        {id: 6, playedBy: null, imgSrc: "blue_square.png"},
        {id: 7, playedBy: null, imgSrc: "blue_square.png"},
        {id: 8, playedBy: null, imgSrc: "blue_square.png"},
        {id: 9, playedBy: null, imgSrc: "blue_square.png"}
      ]

    this.setState(tempState)
  }

  gameWon(){

    const tempState = this.state;
    const winningSolutions = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [1,4,7],
      [2,5,8],
      [3,6,9],
      [3,5,7],
      [1,5,9]
    ]

    winningSolutions.forEach((solution) => {
      let counter = 0;
      solution.forEach((square) => {
        if(this.state.squares[square - 1].playedBy === this.state.currentPlayer){
          counter ++
        }
        if (counter === 3) {
          tempState.winningPlayer = this.state.currentPlayer
          this.updatePlayerScore()
          this.setWinningMessage();
          setTimeout(this.clearBoard, 700)
        }
      })
    })
  }

  render(){
    return (
      <div  className="game-container">
          <Header message= {this.state.winningMessage}/>
          <ScoreComponents
            player1 = {this.state.player1Score}
            player2 = {this.state.player2Score}/>
          <SquareComponents className="square-box"
          squares = {this.state.squares}
          handlePress= {this.handleSquarePress}/>
          <ClearBoard handleClick={this.clearBoard}/>
      </div>
    )
  }
} // class
export default GameContainer;
