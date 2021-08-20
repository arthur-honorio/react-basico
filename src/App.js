import React, {useState} from "react"

import Template from  "./templates/Template.js"
import Albums from "./pages/Albums"
import Counter from "./pages/Counter.js"
import Users from "./pages/Users.js"

const defaultPage = "albums"

const allPages = {
  albums: {
    text: "Álbuns",
    component: Albums,
  },
  counter: {
    text: "Contador",
    component: Counter,
  },
  users: {
    text: "Usuários",
    component: Users,
  }
}

const App = _ => {
  const [page, setPage] = useState(defaultPage)
  
  const handlePageChange = destinationPage => {
    setPage(destinationPage)
  }
  
  const Page = allPages[page].component
    
  return(
    <Template allPages={allPages} onPageChange={handlePageChange} activePage={page}>
      { page && <Page />}
    </Template>
  )
}

export default App