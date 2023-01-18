export default function App() {
  return (
    <>
      <div className="outer-container" id="drum-machine">
        <div className="pad-container">
          <div className="drum-pad">
            <span className="q">Q</span>
          </div>
          <div className="drum-pad">
            <span>W</span>
          </div>
          <div className="drum-pad">
            <span>E</span>
          </div>
          <div className="drum-pad">
            <span>A</span>
          </div>
          <div className="drum-pad">
            <span>S</span>
          </div>
          <div className="drum-pad">
            <span>D</span>
          </div>
          <div className="drum-pad">
            <span>Z</span>
          </div>
          <div className="drum-pad">
            <span>X</span>
          </div>
          <div className="drum-pad">
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
