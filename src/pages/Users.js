import React, {useState, useEffect} from "react"

import Loading from "../components/Loading.js"

const Users = _ => {
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState([])
  useEffect(_ => {
    setIsLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
      response.json().then(data => {
        setUsers(data)
        setIsLoading(false)
      })
    })
  },[])

  return(
    <>
      <p><Loading visible={isLoading} /></p>
      { users.map(user => {
        return (
          <>
            <p> <b>Id:</b> {user.id} - <b>Nome: </b>{user.name} - <b>E-mail:</b> {user.email}</p>
          </>
        )
      })}
    </>
    )
}

export default Users