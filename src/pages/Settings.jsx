import React, { useState, useEffect, useRef } from 'react';

// Icon Components
const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
  </svg>
);

const SecurityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
  </svg>
);

const NotificationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7A7,7 0 0,1 20,14V16A1,1 0 0,1 19,17H5A1,1 0 0,1 4,16V14A7,7 0 0,1 11,7V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M19,18V19A1,1 0 0,1 18,20H6A1,1 0 0,1 5,19V18H19Z"/>
  </svg>
);

const PaletteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"/>
  </svg>
);

const LanguageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z"/>
  </svg>
);

const DataIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"/>
  </svg>
);

const HelpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"/>
  </svg>
);

const SaveIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
  </svg>
);

// Main Settings Page Component
const SettingsPage = ({ sidebarOpen }) => {
  const [activeSection, setActiveSection] = useState('profile');
  const [settings, setSettings] = useState({
    // Profile Settings
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '',
    
    // Security Settings
    twoFactorEnabled: false,
    loginNotifications: true,
    
    // Notification Settings
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    
    // Appearance Settings
    theme: 'dark',
    language: 'en',
    
    // Data Settings
    autoSave: true,
    dataRetention: '30',
  });

  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Constants
  const drawerWidth = 300;
  const collapsedDrawerWidth = 80;

  useEffect(() => {
    // Initialize floating particles
    const newParticles = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }
    setParticles(newParticles);

    // Animate particles
   const animateParticles = () => {
  setParticles(prevParticles => 
    prevParticles.map(particle => {
      // Calculate new positions
      let newX = particle.x + particle.vx;
      let newY = particle.y + particle.vy;
      
      // Handle boundary wrapping
      if (newX > window.innerWidth) newX = 0;
      if (newX < 0) newX = window.innerWidth;
      if (newY > window.innerHeight) newY = 0;
      if (newY < 0) newY = window.innerHeight;
      
      return {
        ...particle,
        x: newX,
        y: newY,
      };
    })
  );
};

    const interval = setInterval(animateParticles, 100);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20
    });
  };

  const settingSections = [
    { id: 'profile', label: 'Profile', icon: UserIcon },
    { id: 'security', label: 'Security', icon: SecurityIcon },
    { id: 'notifications', label: 'Notifications', icon: NotificationIcon },
    { id: 'appearance', label: 'Appearance', icon: PaletteIcon },
    { id: 'language', label: 'Language & Region', icon: LanguageIcon },
    { id: 'data', label: 'Data & Privacy', icon: DataIcon },
    { id: 'help', label: 'Help & Support', icon: HelpIcon },
  ];

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const renderSettingContent = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="setting-card">
              <h3 className="setting-title">Profile Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    value={settings.name}
                    onChange={(e) => handleSettingChange('name', e.target.value)}
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    value={settings.email}
                    onChange={(e) => handleSettingChange('email', e.target.value)}
                    className="form-input"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="setting-card">
              <h3 className="setting-title">Security Settings</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="toggle-setting">
                  <div>
                    <h4 style={{ color: '#f8fafc', fontSize: '16px', margin: 0 }}>Two-Factor Authentication</h4>
                    <p style={{ color: '#94a3b8', fontSize: '14px', margin: '4px 0 0 0' }}>Add an extra layer of security to your account</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.twoFactorEnabled}
                      onChange={(e) => handleSettingChange('twoFactorEnabled', e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="toggle-setting">
                  <div>
                    <h4 style={{ color: '#f8fafc', fontSize: '16px', margin: 0 }}>Login Notifications</h4>
                    <p style={{ color: '#94a3b8', fontSize: '14px', margin: '4px 0 0 0' }}>Get notified when someone signs into your account</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.loginNotifications}
                      onChange={(e) => handleSettingChange('loginNotifications', e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="setting-card">
              <h3 className="setting-title">Notification Preferences</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="toggle-setting">
                  <div>
                    <h4 style={{ color: '#f8fafc', fontSize: '16px', margin: 0 }}>Email Notifications</h4>
                    <p style={{ color: '#94a3b8', fontSize: '14px', margin: '4px 0 0 0' }}>Receive updates and alerts via email</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.emailNotifications}
                      onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="toggle-setting">
                  <div>
                    <h4 style={{ color: '#f8fafc', fontSize: '16px', margin: 0 }}>Push Notifications</h4>
                    <p style={{ color: '#94a3b8', fontSize: '14px', margin: '4px 0 0 0' }}>Get instant notifications in your browser</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.pushNotifications}
                      onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="toggle-setting">
                  <div>
                    <h4 style={{ color: '#f8fafc', fontSize: '16px', margin: 0 }}>Weekly Reports</h4>
                    <p style={{ color: '#94a3b8', fontSize: '14px', margin: '4px 0 0 0' }}>Receive weekly usage summaries</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.weeklyReports}
                      onChange={(e) => handleSettingChange('weeklyReports', e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        );

      case 'appearance':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="setting-card">
              <h3 className="setting-title">Appearance Settings</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label">Theme</label>
                  <select
                    value={settings.theme}
                    onChange={(e) => handleSettingChange('theme', e.target.value)}
                    className="form-select"
                  >
                    <option value="dark">Dark Mode</option>
                    <option value="light">Light Mode</option>
                    <option value="auto">Auto (System)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 'language':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="setting-card">
              <h3 className="setting-title">Language & Region</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label">Language</label>
                  <select
                    value={settings.language}
                    onChange={(e) => handleSettingChange('language', e.target.value)}
                    className="form-select"
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 'data':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="setting-card">
              <h3 className="setting-title">Data & Privacy</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="toggle-setting">
                  <div>
                    <h4 style={{ color: '#f8fafc', fontSize: '16px', margin: 0 }}>Auto-Save</h4>
                    <p style={{ color: '#94a3b8', fontSize: '14px', margin: '4px 0 0 0' }}>Automatically save your work</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.autoSave}
                      onChange={(e) => handleSettingChange('autoSave', e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="form-group">
                  <label className="form-label">Data Retention Period</label>
                  <select
                    value={settings.dataRetention}
                    onChange={(e) => handleSettingChange('dataRetention', e.target.value)}
                    className="form-select"
                  >
                    <option value="7">7 Days</option>
                    <option value="30">30 Days</option>
                    <option value="90">90 Days</option>
                    <option value="365">1 Year</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 'help':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="setting-card">
              <h3 className="setting-title">Help & Support</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="help-item">
                  <h4 style={{ color: '#f8fafc', fontSize: '16px', margin: 0 }}>Documentation</h4>
                  <p style={{ color: '#94a3b8', fontSize: '14px', margin: '4px 0 8px 0' }}>Browse our comprehensive guides and tutorials</p>
                  <button className="help-button">View Docs</button>
                </div>
                <div className="help-item">
                  <h4 style={{ color: '#f8fafc', fontSize: '16px', margin: 0 }}>Contact Support</h4>
                  <p style={{ color: '#94a3b8', fontSize: '14px', margin: '4px 0 8px 0' }}>Get in touch with our support team</p>
                  <button className="help-button">Contact Us</button>
                </div>
                <div className="help-item">
                  <h4 style={{ color: '#f8fafc', fontSize: '16px', margin: 0 }}>Community</h4>
                  <p style={{ color: '#94a3b8', fontSize: '14px', margin: '4px 0 8px 0' }}>Join our community forum for discussions</p>
                  <button className="help-button">Join Community</button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Select a setting category</div>;
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        marginLeft: sidebarOpen ? `${drawerWidth}px` : `${collapsedDrawerWidth}px`,
        minHeight: '100vh',
        background: `
          radial-gradient(circle at 20% 50%, rgba(5, 6, 87, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
          linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)
        `,
        padding: '32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes particle-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(120deg);
          }
          66% {
            transform: translateY(8px) rotate(240deg);
          }
        }

        @keyframes settings-slide-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes card-hover {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        .floating-particle {
          position: absolute;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: particle-float 8s ease-in-out infinite;
        }

        .settings-container {
          animation: settings-slide-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .setting-card {
          background: linear-gradient(135deg, 
            rgba(26, 26, 46, 0.7) 0%, 
            rgba(22, 33, 62, 0.5) 50%, 
            rgba(15, 15, 35, 0.6) 100%
          );
          backdrop-filter: blur(20px);
          border: 2px solid rgba(99, 102, 241, 0.3);
          border-radius: 20px;
          padding: 28px;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 0 60px rgba(99, 102, 241, 0.1);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .setting-card:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 32px 60px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            0 0 80px rgba(99, 102, 241, 0.2);
        }

        .setting-title {
          color: #f8fafc;
          fontSize: 24px;
          fontWeight: 700;
          margin: 0 0 24px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sidebar-menu {
          background: linear-gradient(135deg, 
            rgba(26, 26, 46, 0.8) 0%, 
            rgba(22, 33, 62, 0.6) 100%
          );
          backdrop-filter: blur(20px);
          border: 2px solid rgba(99, 102, 241, 0.3);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          margin-bottom: 8px;
          color: #94a3b8;
          font-weight: 500;
        }

        .menu-item:hover {
          background: rgba(99, 102, 241, 0.1);
          color: #f8fafc;
          transform: translateX(8px);
        }

        .menu-item.active {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 100%);
          color: #f8fafc;
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          color: #f1f5f9;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        .form-input, .form-select {
          padding: 14px 16px;
          background: rgba(30, 41, 59, 0.6);
          border: 2px solid rgba(148, 163, 184, 0.2);
          border-radius: 12px;
          color: #f8fafc;
          font-size: 15px;
          outline: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .form-input:focus, .form-select:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
          transform: translateY(-2px);
        }

        .toggle-setting {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 16px 0;
          border-bottom: 1px solid rgba(99, 102, 241, 0.1);
        }

        .toggle-setting:last-child {
          border-bottom: none;
        }

        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 54px;
          height: 28px;
          flex-shrink: 0;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(148, 163, 184, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 28px;
          border: 2px solid rgba(148, 163, 184, 0.2);
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 20px;
          width: 20px;
          left: 2px;
          bottom: 2px;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        input:checked + .toggle-slider {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-color: rgba(99, 102, 241, 0.5);
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
        }

        input:checked + .toggle-slider:before {
          transform: translateX(26px);
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .help-item {
          padding: 20px;
          background: rgba(99, 102, 241, 0.05);
          border: 1px solid rgba(99, 102, 241, 0.1);
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .help-item:hover {
          background: rgba(99, 102, 241, 0.08);
          border-color: rgba(99, 102, 241, 0.2);
          transform: translateY(-2px);
        }

        .help-button {
          padding: 10px 20px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%);
          border: 2px solid rgba(99, 102, 241, 0.3);
          border-radius: 8px;
          color: #6366f1;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .help-button:hover {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 100%);
          border-color: rgba(99, 102, 241, 0.5);
          color: #f8fafc;
          transform: translateY(-2px);
        }

        .save-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
        }

        .save-button:hover {
          background: linear-gradient(135deg, #4338ca 0%, #7c3aed 100%);
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 12px 35px rgba(99, 102, 241, 0.4);
        }

        @media (max-width: 768px) {
          .settings-layout {
            flex-direction: column !important;
          }
          
          .sidebar-menu {
            margin-bottom: 24px;
          }
          
          .menu-item {
            justify-content: space-between;
          }
        }
      `}</style>

      {/* Floating Particles */}
      {particles.map((particle, index) => (
        <div
          key={index}
          className="floating-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDelay: `${index * 0.2}s`,
          }}
        />
      ))}

      {/* Header */}
      <div style={{
        marginBottom: '40px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '16px',
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: '1.2',
          textShadow: '0 0 40px rgba(99, 102, 241, 0.3)',
          transform: `rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
          transition: 'transform 0.3s ease-out',
        }}>
          Settings
        </h1>
        <p style={{
          color: '#94a3b8',
          fontSize: '18px',
          fontWeight: 400,
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6',
        }}>
          Customize your experience and manage your preferences
        </p>
      </div>

      {/* Main Content */}
      <div className="settings-container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
      }}>
        <div className="settings-layout" style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'flex-start',
        }}>
          {/* Settings Navigation Sidebar */}
          <div style={{ minWidth: '320px' }}>
            <div className="sidebar-menu">
              <h3 style={{
                color: '#f8fafc',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px',
                paddingBottom: '16px',
                borderBottom: '2px solid rgba(99, 102, 241, 0.2)',
              }}>
                Categories
              </h3>
              
              {settingSections.map((section) => (
                <div
                  key={section.id}
                  className={`menu-item ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(section.id)}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    background: activeSection === section.id 
                      ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                      : 'rgba(99, 102, 241, 0.1)',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease',
                  }}>
                    <section.icon />
                  </div>
                  <span style={{ flex: 1, fontSize: '16px' }}>{section.label}</span>
                  <ChevronRightIcon />
                </div>
              ))}
            </div>
          </div>

          {/* Settings Content */}
          <div style={{ flex: 1, minHeight: '500px' }}>
            {renderSettingContent()}

            {/* Save Button */}
            <div style={{
              marginTop: '40px',
              display: 'flex',
              justifyContent: 'center',
            }}>
              <button 
                className="save-button"
                onClick={() => {
                  // Save settings logic here
                  alert('Settings saved successfully!');
                }}
              >
                <SaveIcon />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;