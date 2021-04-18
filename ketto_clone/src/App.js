import React from 'react';
import './App.css';
import { ChatBot } from './components/pages/Chat';
import AllRouter from './Routes/AllRoutes';


function App() {
  return (
    <>
      <AllRouter/>
      <ChatBot/>
      
    </>
  );
}

export default App;