import "./App.css";
import { useState } from "react";

function App() {
  const [changingPlay, changePlay] = useState(false);
  const [play, setPlay] = useState(12);
  const [primary, setPrimary] = useState("B");

  function DisplayPlay() {
    return (
      <div
        className="DisplayPlay"
        style={{
          textAlign: "center",
          height: "100vh",
        }}
      >
        <div
          className="Play"
          onClick={() => {
            changePlay(true);
          }}
        >
          {play}
        </div>
        <div className="Primary" onClick={() => {}}>
          {primary}
        </div>
      </div>
    );
  }

  if (changingPlay) return <div className="App"></div>;
  return <DisplayPlay />
}

export default App;
