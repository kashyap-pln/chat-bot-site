import React, { useState } from 'react';
import './Navbar.css';
import { Bot, Menu } from 'lucide-react';
import { Drawer } from 'antd';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='nav-bar'>
        <div className="nav-left">
          <Bot size={24} />
          <span className="app-name">chatbot</span>
        </div>

        {/* Desktop nav */}
        <div className="nav-right desktop-nav">
        <span className="nav-item">How It Works</span>        
          <span className="nav-item">Pricing</span>
          <span className="nav-item">FAQ</span>
          <span className="nav-item">Blog</span>
          <span className="nav-item">Contact</span>
          <button className="login-button">Login</button>
        </div>

        {/* Hamburger menu icon (mobile) */}
        <div className="hamburger" onClick={() => setOpen(true)}>
          <Menu size={24} />
        </div>
      </div>

      {/* Drawer for mobile nav */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        style={{ padding: 0 }}
      >
        <div className="drawer-menu">
          <span className="drawer-item">Pricing</span>
          <span className="drawer-item">FAQ</span>
          <span className="drawer-item">Blog</span>
          <span className="drawer-item">Contact</span>
          <button className="drawer-login">Login</button>
        </div>
      </Drawer>
    </>
  );
}
