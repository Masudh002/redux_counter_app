
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <h2>Count: {count}</h2>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => dispatch(increment())}>Increment</button>
        <button style={styles.button} onClick={() => dispatch(decrement())}>Decrement</button>
        <button style={styles.button} onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

//inline styles
const styles = {
  container: { textAlign: 'center', marginTop: '50px' },
  buttonContainer: { marginTop: '20px' },
  button: { margin: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }
};

export default Counter;
