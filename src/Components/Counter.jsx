import "../index.css";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className=" container">
      <h2>Count: {count}</h2>
      <div className=" btnContainer">
        <button className=" btn" onClick={() => dispatch(increment())}>Increment</button>
        <button className=" btn" onClick={() => dispatch(decrement())}>Decrement</button>
        <button className=" btn" onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};
export default Counter;
