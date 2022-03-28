import { useSelector, useDispatch } from "react-redux";
import { increment } from "../store/menuActions";

export default function Test() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  function increase() {
    dispatch(increment(1));
  }
  return (
    <div className="App">
      <h1>Test</h1>
      <p>This is a test of the Test component.</p>
      <p>Counter: {counter}</p>
      <button onClick={increase}>+</button>
    </div>
  );
}