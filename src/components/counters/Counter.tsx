import { createSignal } from 'solid-js';

const Counter = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div class='flex items-center gap-8 justify-center'>
      <button onClick={() => setCount(count() + 1)}>+</button>
      <p>Solid Count is: {count()}</p>
      <button onClick={() => setCount(count() - 1)}>-</button>
    </div>
  );
};

export default Counter;
