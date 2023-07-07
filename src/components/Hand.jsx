import '../assets/css/hand.css'

function Hand({ code, color, img, handlerClick }) {
  return (
    <div className='hand__container' onClick={() => { handlerClick(code) }}>
      <h2>{code.toUpperCase()}</h2>
      <img src={img} alt={code} />
    </div>

  )
}


export default Hand