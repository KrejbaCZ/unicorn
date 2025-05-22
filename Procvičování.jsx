import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);
    
  return (
    <div>
      <p>Počet kliknutí: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Klikni na mě
      </button>
    </div>
  );
}

export default Example;
