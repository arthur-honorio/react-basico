import React from "react"

const Loading = ({ visible }) => {
  return(
    <>
      {visible === true ? <span>Carregando...</span> : null}
    </>
  )
}

export default Loading
