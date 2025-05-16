import React from "react";
import './ChatbotLandingSection.css';

const ChatbotLandingSection = () => {
  return (
    <section className="chatbot-landing">
      <div className="chatbot-container">
        <h1 className="chatbot-title">
          {/* <span role="img" aria-label="wave">👋</span> */}
           Meet Chatbot
        </h1>
        <h2 className="chatbot-subtitle">
          Your Website’s AI-Powered Support Assistant
        </h2>
        <p className="chatbot-text">
          Chatbot instantly turns your website into a smart, conversational assistant.
          Just enter your site's URL, and Chatbot will generate a fully customized script
          trained on your content — ready to answer your visitors' questions 24/7.
        </p>
        <p className="chatbot-text">
          Whether you're running an online store, SaaS product, blog, or service site,
          Chatbot understands your content and speaks to your visitors like a pro.
        </p>
        <button className="chatbot-button">Try Chatbot Now</button>
      </div>
      <div className="chat-bot-pros-div">
      <div className="chat-bot-pros">
        <h1 className="chatbot-title">
          {/* <span role="img" aria-label="wave">💡</span>  */}
          Why Chatbot?
        </h1>
        <ul className="chatbot-text chat-bot-pros-list">
          <li>No manual training — just provide your URL</li>
          <li>Personalized answers from your site’s actual content</li>
          <li>Works with any site — copy & paste the script</li>
          <li>Boosts support, sales, and engagement</li>
          <li>Try it free — no credit card required</li>
        </ul>
      </div>
      </div>
    </section>
  );
};

export default ChatbotLandingSection;
