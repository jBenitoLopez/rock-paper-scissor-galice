import { useState, useEffect } from 'react'
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

const initialDecission = {
  human: undefined,
  robot: undefined
};

function App() {
  const [count, setCount] = useState(-1)
  const [decission, setDecission] = useState({ ...initialDecission });

  function endGame(value) {
    console.log('setDecission');
    setDecission({ ...initialDecission });
    console.log('setCount');
    setCount(count + value);
  }

  function checkResult() {
    console.log(decission);
    const actualDecission = config[decission.robot];
    if (decission.human === actualDecission) {
      alert('tablas');
      endGame(0);
    } else if (actualDecission.wins.includes(decission.human)) {
      alert('Robot gana');
      endGame(-1);
    } else {
      alert('Human achieve it');
      endGame(1);
    }
  }

  function fromChild(decission) {
    setDecission({
      human: decission,
      robot: keyList.at(Math.floor(Math.random() * 1029218) % keyList.length)
    });
  }

  useEffect(() => {
    if (decission.robot && decission.human) {
      setTimeout(() => checkResult(), delay);
    }
  });


  return (
    <div className='app'>
      <div className='header'>
        <div className='header__title'>
          ROCK PAPER SCISSORS
        </div>
        <div className='header__score'>
          <Score counter={count} />
        </div>
      </div>
      <div className='main'>
        {
          !decission.human &&
          keyList.map(hand => <Hand key={hand} {...config[hand]} handlerClick={fromChild} />)
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
