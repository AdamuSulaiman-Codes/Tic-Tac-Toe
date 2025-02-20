import React, { useRef } from 'react';
import './PlayerInput.css'; // Make sure to import the CSS file

const PlayerInput = ({ setEnteredPlayerName }) => {
  const playerOneRef = useRef("");
  const playerTwoRef = useRef("");

  function handleSave() {
    const playerOne = playerOneRef.current.value;
    const playerTwo = playerTwoRef.current.value;

    // Validate inputs
    if (playerOne === "" || playerTwo === "") {
      alert("Please fill out both fields");
      return;
    }

    // Update the parent component with player names
    setEnteredPlayerName({
      playerOneName: playerOne,
      playerTwoName: playerTwo,
    });
  }

  return (
    <div className="player-input-container">
      <h2>Enter Player Names</h2>
      <div className="inputs">
        <input type="text" id="player-one" placeholder="Player One Name" ref={playerOneRef} />
        <input type="text" id="player-two" placeholder="Player Two Name" ref={playerTwoRef} />
      </div>
      <button className="save-button" onClick={handleSave}>Save</button>
    </div>
  );
}

export default PlayerInput;
