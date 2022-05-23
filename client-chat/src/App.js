import React from 'react';
import './App.css';
import Background from './layout/Background';
import Register from './components/Register';
import Login from './components/Login';
import Chat from './components/message_components/Chat';
import { useState } from 'react';
import { BrowserRouter as Router, Route,Routes,Navigate } from "react-router-dom";
import Logo from './components/background/Logo';

function App() {
  
  const [user, setUser] = useState(null);

  
  return (
    <Background >
    <Logo/>
    
    <Router>
    {!user && <Routes>
      <Route path = "/register" element = {<Register setUser = {setUser}/>}></Route>
      <Route path = "/login" element = {<Login setUser = {setUser}/>}></Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>}

    {user && <Routes>
      <Route path = "/" element = {<Chat user = {user} />}></Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>}
    
    </Router>
    </Background>
  );
}

export default App;
