import React, { useRef, forwardRef } from 'react';

const Modal = forwardRef(({ winner, handleGameReset }, ref) => {
  return (
    <dialog ref={ref} className="modal">
      <p>{winner} is the winner!</p>
      <form method="dialog">
        <button onClick={handleGameReset}>Close</button>
      </form>
    </dialog>
  );
});

export default Modal;
