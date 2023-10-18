import ColoredNumber from "./ColoredNumber";

export default function Counter({ count, increaseCounter, decreaseCounter }) {
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={increaseCounter}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={decreaseCounter}
        >
          -
        </button>
      </div>
    </div>
  );
}
