import React, { useState } from 'react'

 function Counter() {
    const [count, setCount] = useState(0);

    const Increase = () => {
        setCount(count + 1);
    }

  return (
    <div>

    <h1>{count}</h1>
    <button onClick={() => setCount(count - 1)}>Decrease</button>
    <button onClick={(Increase)}>Increase</button>

    </div>
  )
}

export default Counter;