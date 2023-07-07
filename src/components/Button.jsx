

function Button({ title, handlerClick }) {

  return (
    <button onClick={handlerClick}>{title}</button>
  )
}


export default Button