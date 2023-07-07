import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Score from './components/Score'
import Hand from './components/Hand'
import Button from './components/Button'
import IconRock from './assets/icon-rock.svg';
import IconPaper from './assets/icon-paper.svg';
import IconScissors from './assets/icon-scissors.svg';

const config = {
  paper: {
    code: 'paper',
    color: 'red',
    img: IconPaper,
    wins: ['rock']
  },
  rock: {
    code: 'rock',
    color: 'red',
    img: IconRock,
    wins: ['scissors']
  },
  scissors: {
    code: 'scissors',
    color: 'red',
    img: IconScissors,
    wins: ['paper']
  }
};

const keyList = Object.keys(config);
const delay = 500;

function App() {
  const [count, setCount] = useState(-1)
  const [humanDecission, setHumanDecission] = useState(undefined);
  const [robotDecission, setRobotDecission] = useState(undefined);

  console.log(`[INIT] Human decission ${humanDecission}`);

  // variables
  /*
    --score--
    scoreCounter

    --componente-main--
    ----componente-hand x3--
    --

  */
  function endGame(value) {
    setCount(count + value);
    setHumanDecission(undefined);
    setRobotDecission(undefined);
  }

  function checkResult() {
    console.log(`Robot decission ${robotDecission}`);
    console.log(`Human decission ${humanDecission}`);
    console.log('--------------------')
    const actualDecission = config[robotDecission];
    if (humanDecission === actualDecission) {
      alert('tablas');
      endGame(0);
    } else if (actualDecission.wins.includes(humanDecission)) {
      alert('Robot gana');
      endGame(-1);
    } else {
      alert('Human achieve it');
      endGame(1);
    }
  }

  function fromChild(decission) {
    setHumanDecission(decission);
    setRobotDecission(keyList.at(Math.floor(Math.random() * 1029218) % keyList.length));
  }

  if (robotDecission && humanDecission) {
    setTimeout(() => checkResult(), delay);
  }

  return (
    <div className='app'>
      <div className='header'>
        <div className='header__title'>
          ROECK PAPER SCISSORS
        </div>
        <div className='header__score'>
          <Score counter={count} />
        </div>
      </div>
      <div className='main'>
        {!humanDecission && <>
          {keyList.map(hand => <Hand key={hand} {...config[hand]} handlerClick={fromChild} />)}
          {/* <div className='main_hand'>
            <Hand title='PAPER' color='blue' img='' handlerClick={fromChild} />
          </div>
          <div className='main_hand'>
            <Hand title='SCISSORS' color='blue' img='' handlerClick={fromChild} />
          </div>
          <div className='main_hand'>
            <Hand title='ROCK' color='blue' img='' handlerClick={fromChild} />
          </div> */}
        </>
        }
      </div>
      <div className='footer'>
        <Button title='RESET' handlerClick={() => { setCount(0) }} />
        <Button title='RULES' />
      </div>
    </div>
  )
}

export default App
