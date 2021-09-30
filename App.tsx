import React, { useState } from "react";
import DisplayPlay from "./src/DisplayPlay";
import PickPlay from "./src/PickPlay";
import PickPlayer from "./src/PickPlayer";

function App() {
  const [play, setPlay] = useState(12);
  const [player, setPlayer] = useState("B");

  if (play < 1) return <PickPlay setPlay={setPlay} />;
  if (player === "") return <PickPlayer setPlayer={setPlayer} />;

  return (
    <DisplayPlay
      play={play}
      player={player}
      reset={() => {
        setPlay(0);
        setPlayer("");
      }}
    />
  );
}

export default App;
