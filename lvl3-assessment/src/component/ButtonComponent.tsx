import { useState } from "react"

const ButtonComponent = () => {
  
  const [counter, setCounter] = useState(0)
  const decrementBtn = () =>{
    if(counter > 0) {
      setCounter(x=>x-1);
    }
  }

  const incrementBtn = () =>{
    setCounter(x=>x+1);
  }
  
  return (

    <>
  <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
          <div className="col text-center">
            <button onClick={decrementBtn}>-</button>
          </div>
          <div className="col text-center">
            <h1>{counter}</h1>
          </div>
          <div className="col text-center">
            <button onClick={incrementBtn}>+</button>
          </div>
        </div>
  </div>
        

    </>
  )
}

export default ButtonComponent