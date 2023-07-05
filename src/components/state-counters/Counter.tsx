import { useStore } from '@nanostores/solid';
import { countState } from '@store/CounterStore';

const Counter = () => {
  const count = useStore(countState);
  return (
    <div class='flex items-center gap-8 justify-center'>
      <button onClick={() => countState.set(count() + 1)}>+</button>
      <p>Solid Count is: {count()}</p>
      <button onClick={() => countState.set(count() - 1)}>-</button>
    </div>
  );
};

export default Counter;
