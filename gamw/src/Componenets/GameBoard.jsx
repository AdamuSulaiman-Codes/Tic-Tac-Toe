import React from 'react'
import Buttons from './Buttons'

const GameBoard = ({ emptyBoard, handleClick, userInput }) => {
  return (
    <div className='gameBoard'>
        <Buttons emptyBoard={emptyBoard} handleClick={handleClick} userInput={userInput}/>
    </div>
  )
}

export default GameBoard