import { useEffect, useRef } from "react";

export default function App() {
  const heater1 = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  );
  const heater2 = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  );
  const heater3 = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  );
  const heater4 = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  );
  const clap = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  );
  const openHH = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  );

  const kickNHat = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  );

  const kick = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  );

  const closedHH = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  );

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
      heater1.currentTime = 0;
      heater1.play(); // console.log(heater1);
    }
    if (event.key === "w") {
      wRef.current.classList.add("drum-pad-active");
      heater2.currentTime = 0;
      heater2.play();
    }
    if (event.key === "e") {
      eRef.current.classList.add("drum-pad-active");
      heater3.currentTime = 0;
      heater3.play();
    }
    if (event.key === "a") {
      aRef.current.classList.add("drum-pad-active");
      heater4.currentTime = 0;
      heater4.play();
    }
    if (event.key === "s") {
      sRef.current.classList.add("drum-pad-active");
      clap.currentTime = 0;
      clap.play();
    }
    if (event.key === "d") {
      dRef.current.classList.add("drum-pad-active");
      openHH.currentTime = 0;
      openHH.play();
    }
    if (event.key === "z") {
      zRef.current.classList.add("drum-pad-active");
      kickNHat.currentTime = 0;
      kickNHat.play();
    }
    if (event.key === "x") {
      xRef.current.classList.add("drum-pad-active");
      kick.currentTime = 0;
      kick.play();
    }
    if (event.key === "c") {
      cRef.current.classList.add("drum-pad-active");
      closedHH.currentTime = 0;
      closedHH.play();
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
            >
              <span className="q">Q</span>
            </audio>
            <span className="q">Q</span>
          </div>
          <div className="drum-pad" ref={wRef}>
            <span>W</span>
          </div>
          <div className="drum-pad" ref={eRef}>
            <span>E</span>
          </div>
          <div className="drum-pad" ref={aRef}>
            <span>A</span>
          </div>
          <div className="drum-pad" ref={sRef}>
            <span>S</span>
          </div>
          <div className="drum-pad" ref={dRef}>
            <span>D</span>
          </div>
          <div className="drum-pad" ref={zRef}>
            <span>Z</span>
          </div>
          <div className="drum-pad" ref={xRef}>
            <span>X</span>
          </div>
          <div className="drum-pad" ref={cRef}>
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
