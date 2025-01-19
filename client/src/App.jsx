import React, { useContext } from 'react'
import { Route,Routes  } from 'react-router-dom'
import Home from './pages/home'
import Applyintern from './pages/applyintern'
import Application from './pages/application'
import Recruterlog from './Component/Recruterlog'
import { AppContext } from './context/AppContext'
const App = () => {
  const {shreclogin}=useContext(AppContext)



  return (
    <div>
       {shreclogin && <Recruterlog />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applyintern/:id" element={<Applyintern />} />
          <Route path="/application" element={<Application />} />
        </Routes>
      
    </div>
  )
}

export default App