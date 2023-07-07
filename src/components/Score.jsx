import '../assets/css/score.css'

function Score({ counter }) {
  return (
    <div>
      <p>SCORE</p>
      <p className='counter'>{counter}</p>
    </div>
  )
}


export default Score