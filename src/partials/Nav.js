import React from "react"

const Nav = ({ onPageChange, allPages }) => {

  const pageName = Object.keys(allPages)

  return(
    <nav>
      { pageName.map( page => <button onClick={ _ => onPageChange(page)}>{allPages[page].text}</button>) }
    </nav>
  )
}

export default Nav