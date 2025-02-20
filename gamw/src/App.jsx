import React, { useState, useRef, useEffect } from 'react'; // Import useEffect
import GameBoard from './Componenets/GameBoard'; 
import { emptyBoard } from './assets/data'; 
import Modal from './Componenets/Modal';


const App = () => {
  const [updatedGameBoard, setUpdatedGameBoard] = useState(emptyBoard);
  const [userInput, setUserInput] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const dialogRef = useRef(); 
  const [enteredPlayerName, setEnteredPlayerName] = useState({
    playerOneName: "",
    playerTwoName: "",
  })

  useEffect(() => {
    // Show modal if the game is over
    if (gameOver && dialogRef.current) {
      dialogRef.current.showModal(); // Only show the modal if it's rendered
    }
  }, [gameOver]); // Runs when gameOver state changes

  function checkWinner(board, player) {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
        return true;
      }
      if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
        return true;
      }
    }

    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
      return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
      return true;
    }

    return false; 
  }

  function handleClick(rowIndex, colIndex) {
    if (gameOver) return; 
    if (updatedGameBoard[rowIndex][colIndex] !== "") return; 

    const newBoard = updatedGameBoard.map((row, r) =>
      row.map((cell, c) => (r === rowIndex && c === colIndex ? userInput : cell))
    );

    if (checkWinner(newBoard, userInput)) {
      setGameOver(true);
      setWinner(userInput);
    } else {
      setUserInput((prev) => (prev === "X" ? "O" : "X")); 
    }

    setUpdatedGameBoard(newBoard); 
  }

  function handleGameReset() {
    setUpdatedGameBoard(emptyBoard);  // Reset the board
    setUserInput("X");  // Reset the user input to "X"
    setGameOver(false);  // Reset the game over state
    setWinner(null);  // Clear winner state
    dialogRef.current.close();  // Close the modal
  }
  return (
    <>
      <GameBoard emptyBoard={updatedGameBoard} handleClick={handleClick} />
      {gameOver && <Modal ref={dialogRef} winner={winner} handleGameReset={handleGameReset} />}
    </>
  );
};

export default App;
