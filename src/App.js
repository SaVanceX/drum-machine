import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useRef, useState } from "react";

export default function App() {
  // TODO Refactor to use array of objects with key letters and audio info. use that length of array to generate drumPad components

  const [displayStr, setDisplayStr] = useState("");

  const qRef = useRef(null);
  const wRef = useRef(null);
  const eRef = useRef(null);
  const aRef = useRef(null);
  const sRef = useRef(null);
  const dRef = useRef(null);
  const zRef = useRef(null);
  const xRef = useRef(null);
  const cRef = useRef(null);

  const mutateDrumPadId = (drumpad) => {
    const str = drumpad.id.slice(1);
    const beginningStr = drumpad.id.at(0).toUpperCase();
    const newStr = beginningStr + str.replaceAll("-", " ");
    setDisplayStr(newStr);
  };
  const togglePadActiveClass = (letterRef) => {
    if (letterRef.current) {
      if (letterRef.current.classList.contains("drum-pad-active")) {
        letterRef.current.classList.remove("drum-pad-active");
      } else {
        letterRef.current.classList.add("drum-pad-active");
      }
    } else {
      if (letterRef.classList?.contains("drum-pad-active")) {
        letterRef.classList.remove("drum-pad-active");
      } else {
        letterRef.classList.add("drum-pad-active");
      }
    }
  };

  const currentRef = (letterRef) => {
    if (letterRef.current) {
      // letterRef.current.children[0].volume = rangeVal;
      mutateDrumPadId(letterRef.current);
      letterRef.current.children[0].currentTime = 0;
      letterRef.current.children[0].play();
    } else {
      // letterRef.volume = rangeVal;
      mutateDrumPadId(letterRef);
      letterRef.children[0].currentTime = 0;
      letterRef.children[0].play();
    }
  };

  const handleKeyDown = (event) => {
    switch (event.key.toUpperCase()) {
      case "Q":
        togglePadActiveClass(qRef);
        currentRef(qRef);
        break;
      case "W":
        togglePadActiveClass(wRef);
        currentRef(wRef);
        break;
      case "E":
        togglePadActiveClass(eRef);
        currentRef(eRef);
        break;
      case "A":
        togglePadActiveClass(aRef);
        currentRef(aRef);
        break;
      case "S":
        togglePadActiveClass(sRef);
        currentRef(sRef);
        break;
      case "D":
        togglePadActiveClass(dRef);
        currentRef(dRef);
        break;
      case "Z":
        togglePadActiveClass(zRef);
        currentRef(zRef);
        break;
      case "X":
        togglePadActiveClass(xRef);
        currentRef(xRef);
        break;
      case "C":
        togglePadActiveClass(cRef);
        currentRef(cRef);
        break;
    }
  };

  const handleKeyUp = (event) => {
    switch (event.key.toUpperCase()) {
      case "Q":
        togglePadActiveClass(qRef);
        break;
      case "W":
        togglePadActiveClass(wRef);
        break;
      case "E":
        togglePadActiveClass(eRef);
        break;
      case "A":
        togglePadActiveClass(aRef);
        break;
      case "S":
        togglePadActiveClass(sRef);
        break;
      case "D":
        togglePadActiveClass(dRef);
        break;
      case "Z":
        togglePadActiveClass(zRef);
        break;
      case "X":
        togglePadActiveClass(xRef);
        break;
      case "C":
        togglePadActiveClass(cRef);
        break;
    }
  };

  const handleClick = (event) => {
    switch (event.target.textContent.toUpperCase()) {
      case "Q":
        currentRef(event.target.closest(".drum-pad"));
        break;
      case "W":
        currentRef(event.target.closest(".drum-pad"));
        break;
      case "E":
        currentRef(event.target.closest(".drum-pad"));
        break;
      case "A":
        currentRef(event.target.closest(".drum-pad"));
        break;
      case "S":
        currentRef(event.target.closest(".drum-pad"));
        break;
      case "D":
        currentRef(event.target.closest(".drum-pad"));
        break;
      case "Z":
        currentRef(event.target.closest(".drum-pad"));
        break;
      case "X":
        currentRef(event.target.closest(".drum-pad"));
        break;
      case "C":
        currentRef(event.target.closest(".drum-pad"));
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    // maybe also handle onlick event here as well for consistency

    // Maybe loop through drum-pads and set them to focus?
  }, []);

  return (
    <>
      <div className="outer-container" id="drum-machine">
        <div className="pad-container">
          <div
            className="drum-pad"
            id="heater-1"
            ref={qRef}
            onClick={handleClick}
          >
            <audio
              className="clip"
              id="Q"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              preload="auto"
            ></audio>
            Q
          </div>
          <div
            className="drum-pad"
            id="heater-2"
            ref={wRef}
            onClick={handleClick}
          >
            <audio
              className="clip"
              id="W"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              preload="auto"
            ></audio>
            W
          </div>
          <div
            className="drum-pad"
            id="heater-3"
            ref={eRef}
            onClick={handleClick}
          >
            <audio
              className="clip"
              id="E"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              preload="auto"
            ></audio>
            E
          </div>
          <div className="drum-pad" id="clap" ref={aRef} onClick={handleClick}>
            <audio
              className="clip"
              id="A"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              preload="auto"
            ></audio>
            A
          </div>
          <div
            className="drum-pad"
            id="open-hh"
            ref={sRef}
            onClick={handleClick}
          >
            <audio
              className="clip"
              id="S"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              preload="auto"
            ></audio>
            S
          </div>
          <div
            className="drum-pad"
            id="kick-n-hat"
            ref={dRef}
            onClick={handleClick}
          >
            <audio
              className="clip"
              id="D"
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              preload="auto"
            ></audio>
            D
          </div>
          <div className="drum-pad" id="kick" ref={zRef} onClick={handleClick}>
            <audio
              className="clip"
              id="Z"
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              preload="auto"
            ></audio>
            Z
          </div>
          <div
            className="drum-pad"
            id="kick-2"
            ref={xRef}
            onClick={handleClick}
          >
            <audio
              className="clip"
              id="X"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              preload="auto"
            ></audio>
            X
          </div>
          <div
            className="drum-pad"
            id="closed-hh"
            ref={cRef}
            onClick={handleClick}
          >
            <audio
              className="clip"
              id="C"
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              preload="auto"
            ></audio>
            C
          </div>
        </div>
        <div className="controls-container">
          {/* TODO Stretch goal */}
          {/* <div className="power">Power</div> */}
          <div className="display-container">
            <p id="display">{displayStr}</p>
          </div>
          {/* TODO Stretch goal */}

          {/* <div className="volume-slider">
            <p>
              Volume: <span>{rangeVal}</span>
            </p>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              onChange={handleChange}
            />
          </div> */}
          {/* TODO Stretch goal */}
          {/* <div className="bank">Bank</div> */}
        </div>
      </div>
    </>
  );
}
