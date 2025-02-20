import React from 'react';

const Buttons = ({ emptyBoard, handleClick, userInput }) => {
  return (
    <>
      {emptyBoard.map((innerBoard, rowIndex) => (
        <div key={rowIndex} className="row">
          {innerBoard.map((board, colIndex) => (
            <button 
                key={colIndex} 
                className="button-box"
                onClick={()=>{
                    handleClick(rowIndex, colIndex) 
                }}>
              {board}
            </button>
          ))}
        </div>
      ))}
    </>
  );
};

export default Buttons;
