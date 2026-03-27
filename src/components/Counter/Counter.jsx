import { useState } from 'react';
import './Counter.css';

function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => prev - step);
  const reset = () => setCount(initialCount);

  return (
    <div className="counter" data-testid="counter">
      <h2 className="counter-title">Counter</h2>
      <p className="counter-value" data-testid="counter-value">
        {count}
      </p>
      <div className="counter-actions">
        <button
          className="counter-btn decrement"
          onClick={decrement}
          data-testid="decrement-btn"
        >
          − {step}
        </button>
        <button
          className="counter-btn reset"
          onClick={reset}
          data-testid="reset-btn"
        >
          Reset
        </button>
        <button
          className="counter-btn increment"
          onClick={increment}
          data-testid="increment-btn"
        >
          + {step}
        </button>
      </div>
    </div>
  );
}

export default Counter;
