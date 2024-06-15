import React from 'react';
import { useCounter } from '../hooks/useCounter';

const Counter = () => {
  const {counter, increase, decrease, reset} = useCounter(0);
    return (
        <div>
          {counter}
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;