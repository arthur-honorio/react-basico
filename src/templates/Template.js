import React from "react"

import Header from "../partials/Header.js"
import Loading from "../components/Loading.js"
import Nav from "../partials/Nav.js"

const Template = ({children, activePage, onPageChange, allPages, visible}) => {

  const title = allPages[activePage].text

  return(
    <>
      <Header title={title} />
      <Nav onPageChange={onPageChange} allPages={allPages}/>
      <Loading visible={visible} />
      {children}
    </>
  )
}

export default Template