import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null); 

  const handleFocus = () => {
    inputRef.current.focus(); 
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus the Input</button>
    </div>
  );
}

export default FocusInput;
