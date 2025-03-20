import {useState} from "react";
export default function App2(){
    const [count, setCount]=useState(0); //state variable creation
    const increment =() => {
        setCount(count+1)
    }
    const decrement =() => {
        setCount(count-1)
    }
    return (
        <div>
    <h1>This is App2</h1>
    <button onClick={decrement}>-</button>
    {count}
    <button onClick={increment}>+</button>
    </div>
);
}