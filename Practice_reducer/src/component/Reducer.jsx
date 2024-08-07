import React, { useReducer } from "react";
const initialState = 0;

const reducer = (state, action) => {
  console.log("🚀 ~ reducer ~ state, action", state,action);

  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else {
    return state;
  }
};

const Reducer = () => {
  // const [count,setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <p>{state}</p>
        <div>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default Reducer;
