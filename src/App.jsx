import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ChatbotLandingSection from './Components/ChatbotLandingSection/ChatbotLandingSection';
import HowItWorks from './Components/HowItWorks/HowItWorks';

function App() {
 
  return (
    <div className='App'>
    <Navbar/>
    <ChatbotLandingSection/>
    <HowItWorks/>    
    </div>
  )
}

export default App
