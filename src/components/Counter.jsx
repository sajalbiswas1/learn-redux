import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/features/counter/counterSlice";


const Counter = () => {
const {count} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
//   console.log(count)
    return (
        <div>
            <button onClick={() => dispatch(incrementByValue(5))}>Increment By 5</button><br />
            <button onClick={() => dispatch(increment())}>Increment</button>
           <div>
           <h2>{count}</h2>
           </div>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;