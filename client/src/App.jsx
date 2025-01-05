import React from 'react'
import { Route,Routes  } from 'react-router-dom'
import Home from './pages/home'
import Applyintern from './pages/applyintern'
import Application from './pages/application'
const App = () => {
  return (
    <div>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applyintern/:id" element={<Applyintern />} />
          <Route path="/application" element={<Application />} />
        </Routes>
      
    </div>
  )
}

export default App