import React, { useState } from "react";

export default function ScoreCard({ player, score, onChangeScore }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const newCount = score + 1;
    setCount(newCount);
    onChangeScore(newCount);
  };

  const handleDecrement = () => {
    const newCount = score - 1;
    setCount(newCount);
    onChangeScore(newCount);
  };

  return (
    <div>
      <h1>Player Name : {player}</h1>
      <h1>Score : {score}</h1>

      <button onClick={handleIncrement}>+</button>
      <span>{count}</span>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
