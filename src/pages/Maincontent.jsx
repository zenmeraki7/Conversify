import React, { useState } from 'react';
import { UploadIcon, DocumentIcon, PasteIcon, AIIcon, ExpandIcon } from './Icons';

const drawerWidth = 280;

const MainContent = ({ sidebarOpen }) => {
  const [inputText, setInputText] = useState('');
  const [mode, setMode] = useState('Enhanced');
  const [showModeDropdown, setShowModeDropdown] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);

  const modes = ['Enhanced', 'Standard', 'Creative'];

  const mainContentStyles = {
    marginLeft: sidebarOpen ? drawerWidth : 0,
    transition: 'margin-left 0.3s ease-in-out',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
    padding: '24px',
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '32px',
  };

  const titleStyles = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '16px',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: '1.2',
  };

  const chipStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#f97316',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
  };

  const cardStyles = {
    maxWidth: '1024px',
    margin: '0 auto',
    background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.5) 0%, rgba(22, 33, 62, 0.3) 100%)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  };

  const textareaStyles = {
    width: '100%',
    height: '256px',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    borderRadius: '8px',
    padding: '16px',
    color: '#fff',
    fontSize: '16px',
    fontFamily: 'inherit',
    resize: 'none',
    outline: 'none',
    marginBottom: '24px',
    transition: 'border-color 0.2s ease-in-out',
  };

  const actionButtonStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    padding: '16px 24px',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    backgroundColor: 'transparent',
    color: '#a1a1aa',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 500,
    transition: 'all 0.2s ease-in-out',
    width: '100%',
  };

  const actionButtonHoverStyles = {
    borderColor: '#6366f1',
    color: '#fff',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
  };

  const primaryButtonStyles = {
    padding: '12px 32px',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    border: 'none',
    color: '#fff',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 600,
    transition: 'all 0.2s ease-in-out',
  };

  const primaryButtonHoverStyles = {
    background: 'linear-gradient(135deg, #4338ca 0%, #7c3aed 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)',
  };

  const selectStyles = {
    position: 'relative',
    minWidth: '128px',
  };

  const selectButtonStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    backgroundColor: '#374151',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    color: '#fff',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'border-color 0.2s ease-in-out',
  };

  const dropdownStyles = {
    position: 'absolute',
    top: '48px',
    left: 0,
    right: 0,
    backgroundColor: '#374151',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
  };

  const handleSampleText = () => {
    setInputText("AI-generated content has become increasingly sophisticated in recent years, with models capable of producing high-quality text across various domains. However, there remains a need to ensure that such content maintains a natural, human-like quality that resonates with readers and passes detection systems.");
  };

  const handlePasteText = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputText(text);
    } catch (err) {
      console.log('Failed to read clipboard contents: ', err);
    }
  };

  return (
    <div style={mainContentStyles}>
      {/* Header */}
      <div style={headerStyles}>
        <h1 style={titleStyles}>
          Convert AI Text to Authentic Content
        </h1>
        
        <div 
          style={chipStyles}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        >
          🎁 Earn free words worth $6 →
        </div>
      </div>

      {/* Main Content Card */}
      <div style={cardStyles}>
        {/* Text Input Area */}
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter the text you want to humanize here"
          style={textareaStyles}
          onFocus={(e) => e.target.style.borderColor = '#6366f1'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(99, 102, 241, 0.3)'}
        />

        {/* Action Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          {[
            { icon: UploadIcon, text: 'Upload File', id: 'upload', action: () => {} },
            { icon: DocumentIcon, text: 'Try A Sample', id: 'sample', action: handleSampleText },
            { icon: PasteIcon, text: 'Paste Text', id: 'paste', action: handlePasteText }
          ].map((item) => (
            <button
              key={item.id}
              onClick={item.action}
              style={{
                ...actionButtonStyles,
                ...(hoveredButton === item.id ? actionButtonHoverStyles : {}),
              }}
              onMouseEnter={() => setHoveredButton(item.id)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <item.icon />
              {item.text}
            </button>
          ))}
        </div>

        {/* Bottom Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <button
            style={{
              ...actionButtonStyles,
              width: 'auto',
              ...(hoveredButton === 'ai-check' ? actionButtonHoverStyles : {}),
            }}
            onMouseEnter={() => setHoveredButton('ai-check')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <AIIcon />
            Check for AI
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: '#a1a1aa', fontSize: '16px' }}>Mode:</span>
            
            <div style={selectStyles}>
              <button
                onClick={() => setShowModeDropdown(!showModeDropdown)}
                style={{
                  ...selectButtonStyles,
                  borderColor: showModeDropdown ? '#6366f1' : 'rgba(99, 102, 241, 0.3)',
                }}
              >
                {mode}
                <ExpandIcon />
              </button>
              
              {showModeDropdown && (
                <div style={dropdownStyles}>
                  {modes.map((modeOption) => (
                    <button
                      key={modeOption}
                      onClick={() => {
                        setMode(modeOption);
                        setShowModeDropdown(false);
                      }}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontSize: '16px',
                        borderRadius: modeOption === modes[0] ? '8px 8px 0 0' : modeOption === modes[modes.length - 1] ? '0 0 8px 8px' : '0',
                        transition: 'background-color 0.2s ease-in-out',
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(99, 102, 241, 0.2)'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      {modeOption}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              style={{
                ...primaryButtonStyles,
                ...(isPrimaryHovered ? primaryButtonHoverStyles : {}),
              }}
              onMouseEnter={() => setIsPrimaryHovered(true)}
              onMouseLeave={() => setIsPrimaryHovered(false)}
              onClick={() => {
                if (inputText.trim()) {
                  alert(`Humanizing text in ${mode} mode: "${inputText.substring(0, 50)}..."`);
                }
              }}
            >
              Humanize
            </button>
          </div>
        </div>

        {/* Tips */}
        <div style={{ marginTop: '16px' }}>
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#a1a1aa',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'color 0.2s ease-in-out',
            }}
            onMouseEnter={(e) => e.target.style.color = '#d1d5db'}
            onMouseLeave={(e) => e.target.style.color = '#a1a1aa'}
            onClick={() => alert('Tips: 1. Use clear, simple text for best results. 2. Try different modes for varying levels of humanization. 3. Review the output to ensure it meets your needs.')}
          >
            Tips for use
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;