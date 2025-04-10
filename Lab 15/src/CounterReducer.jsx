import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { counterValue: state.counterValue + 1 };
        case "decrement":
            return { counterValue: state.counterValue - 1 }; 
        default:
            return state;
    }
};

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, { counterValue: 0 }); 

    return (
        <div>
            <p>Counter: {state.counterValue}</p> {}
            <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
        </div>
    );
};

export default CounterReducer;