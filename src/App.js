import React, { useState } from "react";

function App() {
  const [play, setPlay] = useState(0);
  const [player, setPlayer] = useState("");

  function DisplayPlay() {
    return (
      <div
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        <div
          style={{
            flex: 1,
            fontSize: "35vh",
          }}
          onClick={() => {
            setPlay(0);
          }}
        >
          {play}
        </div>
        <div
          style={{
            flex: 1,
            fontSize: "35vh",
          }}
          onClick={() => {
            setPlayer("");
          }}
        >
          {player}
        </div>
      </div>
    );
  }

  const plays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const players = ["L", "C", "T", "R", "B"];

  if (play < 1)
    return (
      <div
        style={{
          padding: "3em",
        }}
      >
        <h1>Pick a Play</h1>
        <p>Currently selected player: {player}</p>
        <div
          style={{
            flexFlow: "column wrap",
          }}
        >
          {plays.map((play) => {
            return (
              <div
                style={{
                  fontSize: "4em",
                  width: "50%",
                  border: 1,
                }}
                onClick={() => {
                  setPlay(play);
                }}
              >
                {play}
              </div>
            );
          })}
        </div>
      </div>
    );
  if (player === "")
    return (
      <div
        style={{
          padding: "3em",
        }}
      >
        <h1>Pick a Primary Target</h1>
        <p>Currently selected play: {play}</p>
        <div
          style={{
            flexFlow: "column wrap",
          }}
        >
          {players.map((player) => {
            return (
              <div
                style={{
                  fontSize: "4em",
                  width: "50%",
                  border: 1,
                }}
                onClick={() => {
                  setPlayer(player);
                }}
              >
                {player}
              </div>
            );
          })}
        </div>
      </div>
    );
  return <DisplayPlay />;
}

export default App;
