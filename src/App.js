import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetails from './pages/UserDetails';
import UserInfo from './pages/UserInfo';

function App() {
  const { buisnessUser } = useSelector((state) => state.buisnessUser)
  console.log("BUISNESS USER::", buisnessUser)
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <UserInfo/> } />
          <Route path="/user_details" element={<UserDetails/>} />
        </Routes>
       
      </div>
    </Router>

  );
}

export default App;
