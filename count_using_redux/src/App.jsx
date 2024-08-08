import './App.css'
import { increment,decrement,incByTen,decByTen } from './feature/CountSlice'
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

  const increceByTen = () => {
    dispatch(incByTen(10));
  };

  const decreaceByTen = () => {
    dispatch(decByTen(10));
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <div style={{display:"flex",gap:"15px",justifyContent:"center"}}>
      <button style={{backgroundColor:"purple"}} onClick={handleIncrement}>+</button>
      <button style={{backgroundColor:"purple"}} onClick={handleDecrement}>-</button>
      <button style={{backgroundColor:"purple"}} onClick={increceByTen}>+10</button>
      <button style={{backgroundColor:"purple"}} onClick={decreaceByTen}>-10</button>
      </div>
    </div>
  );

}

export default App
