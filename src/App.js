import { useEffect, useRef } from "react";

export default function App() {
  const qRef = useRef(null);
  const wRef = useRef(null);
  const eRef = useRef(null);
  const aRef = useRef(null);
  const sRef = useRef(null);
  const dRef = useRef(null);
  const zRef = useRef(null);
  const xRef = useRef(null);
  const cRef = useRef(null);

  // TODO refactor
  const handleKeyDown = (event) => {
    if (event.key === "q") {
      qRef.current.classList.add("drum-pad-active");
      qRef.current.children[0].currentTime = 0;
      qRef.current.children[0].play();
    }
    if (event.key === "w") {
      wRef.current.classList.add("drum-pad-active");
      wRef.current.children[0].currentTime = 0;
      wRef.current.children[0].play();
    }
    if (event.key === "e") {
      eRef.current.classList.add("drum-pad-active");
      eRef.current.children[0].currentTime = 0;
      eRef.current.children[0].play();
    }
    if (event.key === "a") {
      aRef.current.classList.add("drum-pad-active");
      aRef.current.children[0].currentTime = 0;
      aRef.current.children[0].play();
    }
    if (event.key === "s") {
      sRef.current.classList.add("drum-pad-active");
      sRef.current.children[0].currentTime = 0;
      sRef.current.children[0].play();
    }
    if (event.key === "d") {
      dRef.current.classList.add("drum-pad-active");
      dRef.current.children[0].currentTime = 0;
      dRef.current.children[0].play();
    }
    if (event.key === "z") {
      zRef.current.classList.add("drum-pad-active");
      zRef.current.children[0].currentTime = 0;
      zRef.current.children[0].play();
    }
    if (event.key === "x") {
      xRef.current.classList.add("drum-pad-active");
      xRef.current.children[0].currentTime = 0;
      xRef.current.children[0].play();
    }
    if (event.key === "c") {
      cRef.current.classList.add("drum-pad-active");
      cRef.current.children[0].currentTime = 0;
      cRef.current.children[0].play();
    }
  };

  // TODO refactor
  const handleKeyUp = (event) => {
    if (event.key === "q") {
      qRef.current.classList.remove("drum-pad-active");
      // heater1.currentTime = 0;
      // heater1.play();
    }
    if (event.key === "w") {
      wRef.current.classList.remove("drum-pad-active");
    }
    if (event.key === "e") {
      eRef.current.classList.remove("drum-pad-active");
    }
    if (event.key === "a") {
      aRef.current.classList.remove("drum-pad-active");
    }
    if (event.key === "s") {
      sRef.current.classList.remove("drum-pad-active");
    }
    if (event.key === "d") {
      dRef.current.classList.remove("drum-pad-active");
    }
    if (event.key === "z") {
      zRef.current.classList.remove("drum-pad-active");
    }
    if (event.key === "x") {
      xRef.current.classList.remove("drum-pad-active");
    }
    if (event.key === "c") {
      cRef.current.classList.remove("drum-pad-active");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
  }, []);

  return (
    <>
      <div className="outer-container" id="drum-machine">
        <div className="pad-container">
          <div className="drum-pad" ref={qRef}>
            <audio
              className="clip"
              id="Q"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              preload="auto"
            ></audio>
            <span className="q">Q</span>
          </div>
          <div className="drum-pad" ref={wRef}>
            <audio
              className="clip"
              id="W"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              preload="auto"
            ></audio>
            <span>W</span>
          </div>
          <div className="drum-pad" ref={eRef}>
            <audio
              className="clip"
              id="E"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              preload="auto"
            ></audio>
            <span>E</span>
          </div>
          <div className="drum-pad" ref={aRef}>
            <audio
              className="clip"
              id="A"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              preload="auto"
            ></audio>
            <span>A</span>
          </div>
          <div className="drum-pad" ref={sRef}>
            <audio
              className="clip"
              id="S"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              preload="auto"
            ></audio>
            <span>S</span>
          </div>
          <div className="drum-pad" ref={dRef}>
            <audio
              className="clip"
              id="D"
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              preload="auto"
            ></audio>
            <span>D</span>
          </div>
          <div className="drum-pad" ref={zRef}>
            <audio
              className="clip"
              id="Z"
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              preload="auto"
            ></audio>
            <span>Z</span>
          </div>
          <div className="drum-pad" ref={xRef}>
            <audio
              className="clip"
              id="X"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              preload="auto"
            ></audio>
            <span>X</span>
          </div>
          <div className="drum-pad" ref={cRef}>
            <audio
              className="clip"
              id="C"
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              preload="auto"
            ></audio>
            <span>C</span>
          </div>
        </div>
        <div className="controls-container">
          <div className="power">Power</div>
          <p>Display</p>
          <div className="volume-slider">Volume Slider</div>
          <div className="bank">Bank</div>
        </div>
      </div>
    </>
  );
}
