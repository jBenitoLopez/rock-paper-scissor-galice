import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Score from './components/Score'
import Hand from './components/Hand'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(-1)

  // variables
  /*
    --score--
    scoreCounter

    --componente-main--
    ----componente-hand x3--
    --

  */
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
        <div className='main_hand'>
          <Hand title='PAPER' color='blue' img='' handlerClick={() => { setCount(count + 1) }} />
        </div>
        <div className='main_hand'>
          <Hand title='SCISSORS' color='blue' img='' handlerClick={() => { setCount(count + 1) }} />
        </div>
        <div className='main_hand'>
          <Hand title='ROECK' color='blue' img='' handlerClick={() => { setCount(count + 1) }} />
        </div>
      </div>
      <div className='footer'>
        <Button title='RESET' handlerClick={() => { setCount(0) }} />
        <Button title='RULES' />
      </div>
    </div>
  )
}

export default App
