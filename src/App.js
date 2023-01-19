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

  const currentRef = (letterRef) => {
    letterRef.current.classList.add("drum-pad-active");
    letterRef.current.children[0].currentTime = 0;
    letterRef.current.children[0].play();
  };

  // TODO refactor
  const handleKeyDown = (event) => {
    if (event.key === "q") {
      currentRef(qRef);
    }
    if (event.key === "w") {
      currentRef(wRef);
    }
    if (event.key === "e") {
      currentRef(eRef);
    }
    if (event.key === "a") {
      currentRef(aRef);
    }
    if (event.key === "s") {
      currentRef(sRef);
    }
    if (event.key === "d") {
      currentRef(dRef);
    }
    if (event.key === "z") {
      currentRef(zRef);
    }
    if (event.key === "x") {
      currentRef(xRef);
    }
    if (event.key === "c") {
      currentRef(cRef);
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
