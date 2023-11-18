import { useState } from 'react'
import Login from "./components/login"
import Routers from "./routes/Routers"
import { Auth0Provider } from '@auth0/auth0-react'

function App() {
  

  return (
    <>  
        <Auth0Provider domain='dev-21v60mywhiqtiyow.us.auth0.com' clientId='QMdvx9sEEyvOlZhNkz2lGpqvsoBr8AWK'>
        
          <Routers />    

        </Auth0Provider>
    </>
  )
}

export default App
