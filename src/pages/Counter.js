import React, { useState } from "react"

const Counter = _ => {
  const [counter, setCounter] = useState(0)

  const handleOnClick = operator => {
    const newCounter = operator === "+" 
    ? counter + 1
    : counter - 1

    setCounter(newCounter)
  }

  return(
    <>
      <div>{ counter }</div>
      <button onClick={ _ => handleOnClick("-")}>-</button>
      <button onClick={ _ => handleOnClick("+")}>+</button>
    </>
  )
}

export default Counter