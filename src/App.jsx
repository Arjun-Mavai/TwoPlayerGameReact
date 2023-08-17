import React, { useState } from "react";
import ScoreCard from "./ScoreCard";

export default function App() {
  const players = ["Virat", "Rishabh", "Arjun", "Vijay", "Aman"];

  const [player, setplayer] = useState(players[0]);
  const [playerScore, setScore] = useState({});

  const handleScoreChange = (newCount) => {
    setScore((prevScore) => ({ ...prevScore, [player]: newCount }));
  };

  return (
    <>
      <div>
        <select
          name="player"
          id="play"
          onChange={(e) => setplayer(e.target.value)}
        >
          {players.map((player1, index) => (
            <option key={index}>{player1}</option>
          ))}
        </select>
      </div>

      <ScoreCard
        key={player}
        player={player}
        score={playerScore[player] || 0}
        onChangeScore={handleScoreChange}
      />
    </>
  );
}
