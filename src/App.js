import React from "react";
import "./styles.css";
import { evaluate, exp } from "mathjs";

export default function App() {
  const handleClick = function (value) {
    const newExpression = expression.toString() + value;
    setExpression(newExpression);
  };

  const calculate = function () {
    let result;
    try {
      result = evaluate(expression);
      setExpression(result);
    } catch (ex) {
      setExpression("");
    }
  };

  const clear = function () {
    setExpression("");
  };

  const [expression, setExpression] = React.useState("");

  const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/"];
  const button = keys.map((el) => (
    <button key={el} onClick={() => handleClick(el)}>
      {" "}
      {el}{" "}
    </button>
  ));

  return (
    <>
      <div className="screen">{expression}</div>
      <div className="keys">
        {button}
        <button onClick={calculate}>=</button>
        <button onClick={clear}>clear</button>
      </div>
    </>
  );
}
