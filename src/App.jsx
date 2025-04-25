import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ChatbotLandingSection from './Components/ChatbotLandingSection/ChatbotLandingSection';

function App() {
 
  return (
    <div className='App'>
    <Navbar/>
    <ChatbotLandingSection/>    
    </div>
  )
}

export default App
