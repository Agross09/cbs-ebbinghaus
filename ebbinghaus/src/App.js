import './App.css';
import React, {useState} from 'react';
import Slider from '@material-ui/core/Slider';

function App() {

  const [circleDimension, setCircleDimension] = useState(8);
  const [rightCircleDimension, setRightCircleDimension] = useState(8);
  const [equalCircles, setEqualCircles] = useState(false);
  const [showCircles, setShowCircles] = useState(true);
  const [delboeufDimensionRight, setDelboeufDimensionRight] = useState(8.5);
  const [delboeufDimensionLeft, setDelboeufDimensionLeft] = useState(8.5);
  const [nav, setNav] = useState('ebbinghaus');

  const handleChange = (event, newValue) => {
    newValue = newValue / 8;

    if (newValue > circleDimension) {
      setCircleDimension(newValue);
      setRightCircleDimension(8 - (newValue - 8));
    } else {
      setCircleDimension(newValue);
      setRightCircleDimension(8 + (8 - newValue));
    }
  };

  const handleDelboeufChangeLeft = (event, newValue) => {
    console.log(newValue);
    console.log(delboeufDimensionLeft);
    newValue = newValue / 8;
    setDelboeufDimensionLeft(newValue);
  }

  const handleDelboeufChangeRight = (event, newValue) => {
    newValue = newValue / 8;
    setDelboeufDimensionRight(newValue);
  }
  
  return (
    <div className="App">
      <div class="sidenav">
        <a href="#" onClick={() => setNav('ebbinghaus')} id="ebbinghaus">Ebbinghaus</a>
        <a href="#" onClick={() => setNav('delboeuf')} id="delboeuf">Delboeuf</a>
      </div>
      {nav === 'delboeuf' ?
        <header className="App-header">
          <h1>Delboeuf Illusion</h1>
          <div className="ebbinghaus">
            <div className="illusion-container">
              <div class='circle-container'>
                <div id='center' className="init-circle" style={{width: '8vh', height: '8vh', zIndex: 2, backgroundColor: 'transparent', border: '3px solid red'}}></div>
                <div id='center' className="init-circle" style={{width: delboeufDimensionLeft + 'vh', height: delboeufDimensionLeft + 'vh', zIndex: 2, backgroundColor: 'transparent', border: '3px solid blue'}}></div>
              </div>
            </div>
            <div className="illusion-container">
              <div class='circle-container'>
                <div id='center' className="init-circle" style={{width: '8vh', height: '8vh', zIndex: 2, backgroundColor: 'transparent', border: '3px solid red'}}></div>
                <div id='center' className="init-circle" style={{width: delboeufDimensionRight + 'vh', height: delboeufDimensionRight + 'vh', zIndex: 2, backgroundColor: 'transparent', border: '3px solid blue'}}></div>
              </div>
            </div>
            <div className="illusion-tools">
              Tools
              <button onClick={() => {setDelboeufDimensionRight(8.5); setDelboeufDimensionLeft(8.5);}}>
                Reset the illusion
              </button>
              <Slider max={160} min={16} value={delboeufDimensionLeft * 8} onChange={handleDelboeufChangeLeft} aria-labelledby="continuous-slider" />
              <Slider max={160} min={16} value={delboeufDimensionRight * 8} onChange={handleDelboeufChangeRight} aria-labelledby="continuous-slider" />
            </div>
          </div>
          <div className="ebbinghaus-explanation">
            <h2>What is the Delboeuf illusion?</h2>
            <h4>Explanation Here!.</h4>
          </div>
        </header>
      :
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
      }
    </div>
  );
}

export default App;