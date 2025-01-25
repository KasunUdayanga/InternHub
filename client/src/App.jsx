import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Applyintern from './pages/applyintern';
import Application from './pages/application';
import Recruterlog from './Component/Recruterlog';
import { AppContext } from './context/AppContext';
import Dashboard from './pages/dashboard';
import AddIntern from './pages/addIntern';
import ManageIntern from './pages/manegeIntern';
import ViweApplication from './pages/viweApplication';
import 'quill/dist/quill.snow.css'


const App = () => {
  const { shreclogin } = useContext(AppContext);

  return (
    <div>
      {shreclogin && <Recruterlog />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applyintern/:id" element={<Applyintern />} />
        <Route path="/application" element={<Application />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="addIntern" element={<AddIntern />} />
          <Route path="manageintern" element={<ManageIntern />} />
          <Route path="viewapplication" element={<ViweApplication />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
