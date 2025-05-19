import React from 'react';
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <div className='how-it-works-div'>
          <div className="how-it-works-container">
        <h1 className="chatbot-title">
          {/* <span role="img" aria-label="wave">🚀</span> */}
           How It Works?
        </h1>
        <h2 className="chatbot-subtitle">
        Start in 3 Simple Steps
        </h2>
        <ol>
          <li>Enter your website URL</li>
          <li>Generate your custom chatbot script</li>
          <li>Embed it on your site — that’s it!</li>
        </ol>
      </div>
      <div></div>
    </div>
  )
}
