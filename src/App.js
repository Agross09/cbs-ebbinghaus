import './App.css';
import React, {useState} from 'react';
import Slider from '@material-ui/core/Slider';

function App() {

  const delboeufStartingSizes = {
    left: 30,
    right: 12
  };
  
  const ponzoStartingSizes = {
    top: 15,
    bot: 45,
  }

  const [circleDimension, setCircleDimension] = useState(8);
  const [rightCircleDimension, setRightCircleDimension] = useState(8);
  const [equalCircles, setEqualCircles] = useState(false);
  const [showCircles, setShowCircles] = useState(true);
  const [delboeufDimensionRight, setDelboeufDimensionRight] = useState(delboeufStartingSizes.right);
  const [delboeufDimensionLeft, setDelboeufDimensionLeft] = useState(delboeufStartingSizes.left);
  const [ponzoDimensionTop, setPonzoDimensionTop] = useState(ponzoStartingSizes.top);
  const [ponzoDimensionBot, setPonzoDimensionBot] = useState(ponzoStartingSizes.bot);
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

  const handlePonzoChangeBot = (event, newValue) => {
    setPonzoDimensionBot(newValue);
  }

  const handlePonzoChangeTop = (event, newValue) => {
    setPonzoDimensionTop(newValue);
  }

  const ColoredLine = ({ direction }) => (
    <hr className={direction === 'left' ? 'leftLine' : 'rightLine'}
    />
);
  
  switch(nav) {
    case 'delboeuf':
      return (
        <div className="App">
          <div class="sidenav">
            <a href="#" onClick={() => setNav('ebbinghaus')} id="ebbinghaus">Ebbinghaus</a>
            <a href="#" onClick={() => setNav('ponzo')} id="ponzo">Ponzo</a>
            <a href="#" onClick={() => setNav('delboeuf')} id="delboeuf">Delboeuf</a>
          </div>
          <header className="App-header">
          <h1>Delboeuf Illusion</h1>
          <div className="ebbinghaus">
            <div className="illusion-container-delboeuf">
              <div class='circle-container'>
                <div id='center' className="init-circle" style={{width: '8vh', height: '8vh', zIndex: 2, backgroundColor: 'yellow'}}></div>
                <div id='center' className="init-circle" style={{width: delboeufDimensionLeft + 'vh', height: delboeufDimensionLeft + 'vh', zIndex: 2, backgroundColor: 'transparent', border: '3px solid purple'}}></div>
              </div>
            </div>
            <div className="illusion-container-delboeuf">
              <div class='circle-container'>
                <div id='center' className="init-circle" style={{width: '8vh', height: '8vh', zIndex: 2, backgroundColor: 'yellow'}}></div>
                <div id='center' className="init-circle" style={{width: delboeufDimensionRight + 'vh', height: delboeufDimensionRight + 'vh', zIndex: 2, backgroundColor: 'transparent', border: '3px solid purple'}}></div>
              </div>
            </div>
            <div className="illusion-tools-delboeuf">
              <h4 style={{marginBottom: '30px'}}>Tools</h4>
              <button style={{marginBottom: '15px'}} onClick={() => {setDelboeufDimensionRight(delboeufStartingSizes.right); setDelboeufDimensionLeft(delboeufStartingSizes.left);}}>
                Reset the illusion
              </button>
              <label style={{fontSize: '18px', marginTop: '15px'}}>Size of the left purple ring</label>
              <Slider max={200} min={16} value={delboeufDimensionLeft * 8} onChange={handleDelboeufChangeLeft} aria-labelledby="continuous-slider" />
              <label style={{fontSize: '18px', marginTop: '15px'}}>Size of the right purple ring</label>
              <Slider max={200} min={16} value={delboeufDimensionRight * 8} onChange={handleDelboeufChangeRight} aria-labelledby="continuous-slider" />
            </div>
          </div>
          <div className="illusion-explanation">
            <h2>What is the Delboeuf Illusion?</h2>
            <h3>History</h3>
            <h5>
                Developed by Belgian psychophysicist Joseph Remi Leopold Delboeuf in 1865, 
                the Delboeuf Illusion is an optical illusion of relative size perception.
            </h5>
            <h3>How does it work?</h3>
            <h5>
                The illusion consists of two identically sized inner disks each encircled
                by a ring. The distance between the disks and their respective ring differ such that one disk appears
                smaller due to the larger distance between it and its ring whereas the other appears larger
                for the opposite reason.
                A study from 1982 by researchers Girgus and Coren suggests that the illusion makes use of both
                assimilation and contrast to distort our perception. The inner disk surrounded by the tighter circle is
                perceived to be a pair whereas the inner disk surrounded by the looser circle is not perceived in the same way,
                hence assimilation of the former disk and its circle. Contrast comes in when perceiving the difference in distance
                between the disks and their respecitve outer circles. Studies have shown that the Delboeuf Illusion is present
                in participants' quantity of food they take at a buffet depending on the size of their plate. This suggests that
                the perception that a bigger plate makes an amount that fills a smaller plate appear smaller (Ittersum & Wansing (2012).
            </h5>
          </div>
        </header>
        </div>
      );
      break;
    case 'ebbinghaus':
      return (
        <div className="App">
        <div class="sidenav">
          <a href="#" onClick={() => setNav('ebbinghaus')} id="ebbinghaus">Ebbinghaus</a>
          <a href="#" onClick={() => setNav('ponzo')} id="ponzo">Ponzo</a>
          <a href="#" onClick={() => setNav('delboeuf')} id="delboeuf">Delboeuf</a>
        </div>
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
              <h4 style={{marginBottom: '30px'}}>Tools</h4>
              <button style={{marginBottom: '15px'}} onClick={() => {setCircleDimension(8); setRightCircleDimension(8);}}>
                Reset the illusion
              </button>
              <form>
                <label style={{fontSize: '18px', marginTop: '15px'}}>
                  Equal Circles
                  <input
                    name="equalCircles"
                    type="checkbox"
                    checked={equalCircles}
                    onChange={() => setEqualCircles(!equalCircles)}
                  />
                </label>
                <br />
                <label style={{fontSize: '18px', marginTop: '15px'}}>
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
          <div className="illusion-explanation">
            <h2>What is the Ebbinghaus Illusion?</h2>
            <h3>History</h3>
            <h5>
                Developed by German psychologist Hermann Ebbinghaus, 
                the Ebbinghaus Illusion is an optical illusion of relative size perception.
                It was popularized in the English-speaking world by psychologist Edward B. Titchener
                in his 1901 textbook on experimental psychology.
            </h5>
            <h3>How does it work?</h3>
            <h5>
                The illusion consists of two identically sized inner circles orbited by circles
                of, in one case, a larger size and, in the other case, a smaller size.
                Research suggests that most people do not perceive inner circles
                of equal size but rather that the inner circle orbited by larger circles appears
                smaller than the other oribited by smaller circles. Studies suggest that
                the distance between the inner circle and the outer circles is what causes
                the misperception of size. Interestingly, a correlation between the power of the
                illusion and age exists where for children under the age of 10, the illusion is less
                powerful (Doherty et al. 2010).
            </h5>
          </div>
        </header>
      </div>
      );
    case 'ponzo':
      return (
        <div className="App">
        <div class="sidenav">
          <a href="#" onClick={() => setNav('ebbinghaus')} id="ebbinghaus">Ebbinghaus</a>
          <a href="#" onClick={() => setNav('ponzo')} id="ponzo">Ponzo</a>
          <a href="#" onClick={() => setNav('delboeuf')} id="delboeuf">Delboeuf</a>
        </div>
        <header className="App-header">
        <h1>Ponzo Illusion</h1>
        <div className="ebbinghaus">
          <div className="illusion-container-delboeuf">
            <ColoredLine direction="left" />
            <ColoredLine direction="right" />
            <hr className="tracks" style={{top: '12vh', height: '15vh'}} />
            <hr className="tracks" style={{top: '20vh', height: '20vh'}} />
            <hr className="tracks" style={{top: '25vh', height: '30vh'}} />
            <hr className="tracks" style={{top: '30vh', height: '40vh'}} />
            <hr className="tracks" style={{top: '38vh', height: '50vh'}} />
            <hr className="topTrack" style={{top: ponzoDimensionTop + 'vh', height: '20vh'}} />
            <hr className="bottomTrack" style={{top: ponzoDimensionBot + 'vh', height: '20vh'}} />
          </div>
          <div className="illusion-tools-delboeuf">
            <h4 style={{marginBottom: '30px'}}>Tools</h4>
            <button style={{marginBottom: '15px'}} onClick={() => {setPonzoDimensionTop(ponzoStartingSizes.top); setPonzoDimensionBot(ponzoStartingSizes.bot)}}>
              Reset the illusion
            </button>
            <label style={{fontSize: '18px', marginTop: '15px'}}>Size of the top yellow line</label>
            <Slider max={50} min={10} value={ponzoDimensionTop} onChange={handlePonzoChangeTop} aria-labelledby="continuous-slider" />
            <label style={{fontSize: '18px', marginTop: '15px'}}>Size of the bottom yellow line</label>
            <Slider max={50} min={10} value={ponzoDimensionBot} onChange={handlePonzoChangeBot} aria-labelledby="continuous-slider" />
          </div>
        </div>
        <div className="illusion-explanation">
          <h2>What is the Ponzo Illusion?</h2>
          <h3>History</h3>
          <h5>
              Developed by Italian psychologist Mario Ponzo in 1911, the Ponzo Illusion
              is a geometrical-opitcal illusion based on how an object's size is perceived
              relative to its background.
          </h5>
          <h3>How does it work?</h3>
          <h5>
              We perceive the two yellow parallel lines as different lengths
              because of the linear perspective created by the converging lines
              in the background. We interpret the top line to be further away from
              us in the context of our linear perspective, whereas we interpret the
              bottom line to be closer to us. A possible explanation for this illusion
              is that we associate converging lines (especially lines that look like
              train tracks) with distance. Recent research suggests that susceptibility
              to the illusion differs between Western/urbanized populations and non-Western/rural populations
              (Shiraev, E. D. (2007)). Other studies have shown that the Ponzo Illusion
              demonstrates a dissocation between vision we use for perception and vision we use
              for actions such as grasping or hitting, the latter of which is found to
              not be subject to the size aspect of the illusion (Ganel T, Tanzer M, Goodale MA (2008)).
          </h5>
        </div>
      </header>
      </div>
      );
      break;
    default:
      return null;
  }
}

export default App;