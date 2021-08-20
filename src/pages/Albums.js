import React, {useState, useEffect} from "react"

import Loading from "../components/Loading.js"

const Albums = _ => {
  const [isLoading, setIsLoading] = useState(false)
  const [albums, setAlbums] = useState([])

  useEffect( () => {
    setIsLoading(true)
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => response.json())
      .then(data => {
        setAlbums(data)
        setIsLoading(false)
      })
  }, [])
  return(
    <>
      <p><Loading visible={isLoading} /></p>
      {
        albums.map(album => {
          return(
            <div>
              <p><b>Id:</b> {album.id} - <b>Título: </b>{album.title}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default Albums