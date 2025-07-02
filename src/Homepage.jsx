import React, { useState } from 'react';
import Sidebar from './pages/Sidebar';
import MainContent from './pages/Maincontent';
import { MenuIcon } from './pages/Icons';

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const appBarStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '64px',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    borderBottom: '1px solid rgba(99, 102, 241, 0.2)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    zIndex: 1100,
    backdropFilter: 'blur(10px)',
  };

  const menuButtonStyles = {
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '4px',
    transition: 'background-color 0.2s ease-in-out',
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* App Bar */}
      <div style={appBarStyles}>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={menuButtonStyles}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          <MenuIcon />
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div style={{ flex: 1, paddingTop: '64px' }}>
        <MainContent sidebarOpen={sidebarOpen} />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            display: window.innerWidth < 768 ? 'block' : 'none',
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default HomePage;