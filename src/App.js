import { useState } from "react";
import "./styles.css";
import Counter from "./components/Counter";

export default function App() {
  const [count, setCount] = useState(0);

  function increaseCounter() {
    setCount(count + 1);
  }
  function decreaseCounter() {
    setCount(count - 1);
  }
  return (
    <Counter
      count={count}
      increaseCounter={increaseCounter}
      decreaseCounter={decreaseCounter}
    />
  );
}
