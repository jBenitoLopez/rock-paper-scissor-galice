import '../assets/css/hand.css'

function Hand({ title, color, img, handlerClick }) {
  return (
    <div className='hand__container' onClick={handlerClick}>
      <h2>{title}</h2>
      <img src={img} alt={title} />
    </div>

  )
}


export default Hand