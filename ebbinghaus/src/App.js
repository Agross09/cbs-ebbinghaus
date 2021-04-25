import './App.css';
import React, {useState} from 'react';
import Slider from '@material-ui/core/Slider';

function App() {

  const [circleDimension, setCircleDimension] = useState(8);
  const [rightCircleDimension, setRightCircleDimension] = useState(8);
  const [equalCircles, setEqualCircles] = useState(false);
  const [showCircles, setShowCircles] = useState(true);

  const handleChange = (event, newValue) => {
    // console.log('NEW: ', newValue);
    // console.log('DIMENSION ', circleDimension);
    // console.log('RIGHT ', rightCircleDimension);
    newValue = newValue / 8;

    if (newValue > circleDimension) {
      setCircleDimension(newValue);
      setRightCircleDimension(8 - (newValue - 8));
    } else {
      setCircleDimension(newValue);
      setRightCircleDimension(8 + (8 - newValue));
    }
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ebbinghaus Illusion</h1>
        <div className="ebbinghaus">
          <div className="illusion-container">
            <div class='circle-container'>
            {equalCircles ? <div id='center' className="init-circle" style={{width: '8vh', height: '8vh', zIndex: 2, backgroundColor: 'transparent', border: '3px solid red'}}></div> : null }
              <div id='center' className="init-circle" style={{width: circleDimension + 'vh', height: circleDimension + 'vh'}}></div>
              {showCircles ?
                <>
                  <div id='deg0' className="surround-circle"></div>
                  <div id='deg60' className="surround-circle"></div>
                  <div id='deg120' className="surround-circle"></div>
                  <div id='deg180' className="surround-circle"></div>
                  <div id='deg240' className="surround-circle"></div>
                  <div id='deg300' className="surround-circle"></div>
                </>
                : null              
              }
            </div>
          </div>
          <div className="illusion-container">
            <div class='circle-container'>
                {equalCircles ? <div id='center' className="init-circle" style={{width: '8vh', height: '8vh', zIndex: 2, backgroundColor: 'transparent', border: '3px solid red'}}></div> : null }
                <div id='center' className="init-circle" style={{width: rightCircleDimension + 'vh', height: rightCircleDimension + 'vh'}}></div>
                {showCircles ?
                  <>
                    <div id='deg0s' className="surround-circle-small"></div>
                    <div id='deg30s' className="surround-circle-small"></div>
                    <div id='deg60s' className="surround-circle-small"></div>
                    <div id='deg90s' className="surround-circle-small"></div>
                    <div id='deg120s' className="surround-circle-small"></div>
                    <div id='deg150s' className="surround-circle-small"></div>
                    <div id='deg180s' className="surround-circle-small"></div>
                    <div id='deg210s' className="surround-circle-small"></div>
                    <div id='deg240s' className="surround-circle-small"></div>
                    <div id='deg270s' className="surround-circle-small"></div>
                    <div id='deg300s' className="surround-circle-small"></div>
                    <div id='deg330s' className="surround-circle-small"></div>
                  </>
                  : null
                }
              </div>
          </div>
          <div className="illusion-tools">
            Tools
            <button onClick={() => {setCircleDimension(8); setRightCircleDimension(8);}}>
              Reset the illusion
            </button>
            <form>
              <label>
                Equal Circles
                <input
                  name="equalCircles"
                  type="checkbox"
                  checked={equalCircles}
                  onChange={() => setEqualCircles(!equalCircles)}
                />
              </label>
              <br />
              <label>
                Show surrounding circles
                <input
                  name="numberOfGuests"
                  type="checkbox"
                  checked={showCircles}
                  onChange={() => setShowCircles(!showCircles)}
                />
              </label>
            </form>
            <Slider max={160} min={16} value={circleDimension * 8} onChange={handleChange} aria-labelledby="continuous-slider" />
          </div>
        </div>
        <div className="ebbinghaus-explanation">
          <h2>What is the Ebbinghaus illusion?</h2>
          <h4>Developed by German psychologist Hermann Ebbinghaus, the Ebbinghaus Illusion is an optical illusion of relative size perception.</h4>
        </div>
      </header>
    </div>
  );
}

export default App;