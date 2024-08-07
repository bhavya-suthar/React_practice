import './App.css'
import { increment,decrement } from './feature/CountSlice'
import { useDispatch,useSelector } from 'react-redux'

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <div style={{display:"flex",gap:"15px",justifyContent:"center"}}>
      <button style={{backgroundColor:"purple"}} onClick={handleIncrement}>+</button>
      <button style={{backgroundColor:"purple"}} onClick={handleDecrement}>-</button>
      </div>
    </div>
  );

}

export default App
