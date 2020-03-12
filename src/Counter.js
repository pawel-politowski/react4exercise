import React, { useState } from 'react';

  const Counter = () => {
    const [count, setCount] = useState(0);
    return (
      <div className="container">
        <div>Count: {count}</div>
        <button className="button" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="button" onClick={() => setCount(count - 1)}>Decrement</button>
        <button className="button" onClick={() => setCount(0)}>Zeruj</button>
      </div>
);
};
    export default Counter;