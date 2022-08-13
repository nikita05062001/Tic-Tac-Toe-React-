import "./App.css";
import Cell from "./cell";
import React, { useState, useEffect } from "react";

const App = () => {
  const [squarState, setSquare] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);
  const wincombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [2, 4, 6],
    [0, 4, 8],
  ];
  const CheckWin = () => {
    for (let i = 0; i < wincombo.length; i++) {
      if (
        squarState[wincombo[i][0]] != null &&
        squarState[wincombo[i][0]] == squarState[wincombo[i][1]] &&
        squarState[wincombo[i][2]] == squarState[wincombo[i][0]]
      ) {
        setCount(0);
        setSquare(Array(9).fill(null));
        alert("You win");
        return true;
      }
      return false;
    }
  };
  const CheckArray = () => {
    if (
      squarState.every((value) => {
        return value !== null;
      })
    ) {
      alert("Ничья!");
      setSquare(Array(9).fill(null));
    }
  };

  useEffect(() => {
    if (!CheckWin()) CheckArray();
  });

  const clickHandler = (squar, id) => {
    if (squar == null) {
      const newArr = [...squarState];
      count % 2 === 0 ? (newArr[id] = "X") : (newArr[id] = "Y");
      setCount(count + 1);
      setSquare(newArr);
    }
  };

  return (
    <div className="App">
      <div className="game-field">
        {squarState.map((value, index) => {
          return (
            <Cell squar={value} clickhandler={clickHandler} id={index}></Cell>
          );
        })}
      </div>
    </div>
  );
};

export default App;
