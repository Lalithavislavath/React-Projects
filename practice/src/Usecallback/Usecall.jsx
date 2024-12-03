import React, { useCallback, useState } from 'react'
import Child from './Child';
function Usecall() {
    const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); 

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <Child onClick={handleClick} />
    </div>
  );

}
export default Usecall