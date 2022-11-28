import React from 'react';
import {Routes, Route} from "react-router-dom"


import './styles/App.css';
import Sidebar  from './components/Sidebar';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Team from './pages/Team';
import Settings from './pages/Settings';
import ErrorPage from './ErrorPage';


const App:React.FC = () => {
  return (
    <>
    <div className="App">
      <h1 className='heading'>User Profile</h1>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage/>}/>
        <Route path="/tasks" element={<Tasks />} errorElement={<ErrorPage/>}/>
        <Route path="/team" element={<Team />} errorElement={<ErrorPage/>}/>
        <Route path="/settings" element={<Settings />} errorElement={<ErrorPage/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
