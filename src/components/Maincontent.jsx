import React, { useState } from 'react';

// Icon components
const UploadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
  </svg>
);

const DocumentIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"/>
  </svg>
);

const PasteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19,20H5V4H7V7H17V4H19M12,2A1,1 0 0,1 13,3A1,1 0 0,1 12,4A1,1 0 0,1 11,3A1,1 0 0,1 12,2M19,2H14.82C14.4,0.84 13.3,0 12,0C10.7,0 9.6,0.84 9.18,2H5A2,2 0 0,0 3,4V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V4A2,2 0 0,0 19,2Z"/>
  </svg>
);

const AIIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22,14A2,2 0 0,1 20,16H4A2,2 0 0,1 2,14V10A2,2 0 0,1 4,8H20A2,2 0 0,1 22,10V14M4,14H8V10H4V14M10,14H14V10H10V14M16,14H20V10H16V14Z"/>
  </svg>
);

const ExpandIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
  </svg>
);

const LightBulbIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"/>
  </svg>
);

const drawerWidth = 280;
const collapsedDrawerWidth = 64;

const MainContent = ({ sidebarOpen = false }) => {
  const [inputText, setInputText] = useState('');
  const [mode, setMode] = useState('Enhanced');
  const [showModeDropdown, setShowModeDropdown] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [showTips, setShowTips] = useState(false);

  const modes = ['Enhanced', 'Standard', 'Creative'];

  const tips = [
    {
      title: "Write Clear Text",
      description: "Use simple, straightforward language for the best humanization results",
      icon: "✍️"
    },
    {
      title: "Choose the Right Mode",
      description: "Enhanced for formal content, Creative for marketing, Standard for general use",
      icon: "⚙️"
    },
    {
      title: "Review Output",
      description: "Always check the humanized text to ensure it maintains your intended meaning",
      icon: "👀"
    },
    {
      title: "Optimal Length",
      description: "Works best with 50-2000 words. Longer texts may need to be split",
      icon: "📏"
    },
    {
      title: "Context Matters",
      description: "Provide context in your text for more accurate humanization",
      icon: "🎯"
    }
  ];

  const mainContentStyles = {
    marginLeft: sidebarOpen ? drawerWidth : collapsedDrawerWidth,
    transition: 'margin-left 0.3s ease-in-out',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
    padding: '24px',
    margin: 0,
    marginTop: 0,
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
    boxSizing: 'border-box',
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
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
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

  const tipsContainerStyles = {
    marginTop: '24px',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.03) 100%)',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
  };

  const tipsHeaderStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 20px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    borderBottom: showTips ? '1px solid rgba(99, 102, 241, 0.2)' : 'none',
  };

  const tipsContentStyles = {
    maxHeight: showTips ? '500px' : '0',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: showTips ? '20px' : '0 20px',
  };

  const tipItemStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    padding: '16px',
    background: 'rgba(99, 102, 241, 0.03)',
    border: '1px solid rgba(99, 102, 241, 0.1)',
    borderRadius: '8px',
    marginBottom: '12px',
    transition: 'all 0.2s ease-in-out',
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
      <style>{`
        @media (max-width: 768px) {
          .main-content {
            margin-left: 0 !important;
            padding: 16px !important;
          }
          
          .title {
            font-size: 2rem !important;
          }
          
          .action-buttons {
            grid-template-columns: 1fr !important;
          }
          
          .bottom-controls {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          
          .textarea {
            height: 200px !important;
          }
          
          .card {
            padding: 16px !important;
          }
        }
        
        @media (max-width: 480px) {
          .title {
            font-size: 1.5rem !important;
          }
          
          .chip {
            padding: 6px 12px !important;
            font-size: 14px !important;
          }
          
          .action-button {
            padding: 12px 16px !important;
            font-size: 14px !important;
          }
          
          .primary-button {
            padding: 12px 24px !important;
            font-size: 14px !important;
          }
          
          .select-button {
            padding: 6px 12px !important;
            font-size: 14px !important;
          }
        }

        .tip-item:hover {
          background: rgba(99, 102, 241, 0.08) !important;
          border-color: rgba(99, 102, 241, 0.3) !important;
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.1);
        }

        .tips-header:hover {
          background: rgba(99, 102, 241, 0.05);
        }

        .icon-emoji {
          font-size: 20px;
          padding: 8px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 36px;
          height: 36px;
        }
      `}</style>

      {/* Header */}
      <div className="header" style={headerStyles}>
        <h1 className="title" style={titleStyles}>
          Convert AI Text to Authentic Content
        </h1>
        
        <div 
          className="chip"
          style={chipStyles}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        >
          🎁 Earn free words worth $6 →
        </div>
      </div>

      {/* Main Content Card */}
      <div className="card" style={cardStyles}>
        {/* Text Input Area */}
        <textarea
          className="textarea"
          style={textareaStyles}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter the text you want to humanize here"
          onFocus={(e) => e.target.style.borderColor = '#6366f1'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(99, 102, 241, 0.3)'}
        />

        {/* Action Buttons */}
        <div className="action-buttons" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          {[
            { icon: UploadIcon, text: 'Upload File', id: 'upload', action: () => {} },
            { icon: DocumentIcon, text: 'Try A Sample', id: 'sample', action: handleSampleText },
            { icon: PasteIcon, text: 'Paste Text', id: 'paste', action: handlePasteText }
          ].map((item) => (
            <button
              key={item.id}
              className="action-button"
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
        <div className="bottom-controls" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: '#a1a1aa', fontSize: '16px' }}>Mode:</span>
            
            <div style={selectStyles}>
              <button
                className="select-button"
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
          </div>

          <button
            className="primary-button"
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

        {/* Enhanced Tips Section */}
        <div style={tipsContainerStyles}>
          <div 
            className="tips-header"
            style={tipsHeaderStyles}
            onClick={() => setShowTips(!showTips)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                borderRadius: '8px',
                color: '#fff'
              }}>
                <LightBulbIcon />
              </div>
              <div>
                <h3 style={{
                  color: '#f8fafc',
                  fontSize: '16px',
                  fontWeight: '600',
                  margin: 0,
                  marginBottom: '2px'
                }}>
                  Pro Tips for Best Results
                </h3>
                <p style={{
                  color: '#94a3b8',
                  fontSize: '14px',
                  margin: 0
                }}>
                  {showTips ? 'Click to hide tips' : 'Click to view optimization tips'}
                </p>
              </div>
            </div>
            
            <div style={{
              color: '#94a3b8',
              transition: 'transform 0.3s ease-in-out',
              transform: showTips ? 'rotate(180deg)' : 'rotate(0deg)'
            }}>
              <ChevronDownIcon />
            </div>
          </div>

          <div style={tipsContentStyles}>
            <div style={{ display: 'grid', gap: '12px' }}>
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="tip-item"
                  style={tipItemStyles}
                >
                  <div className="icon-emoji">
                    {tip.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      color: '#f8fafc',
                      fontSize: '15px',
                      fontWeight: '600',
                      margin: 0,
                      marginBottom: '6px'
                    }}>
                      {tip.title}
                    </h4>
                    <p style={{
                      color: '#94a3b8',
                      fontSize: '14px',
                      margin: 0,
                      lineHeight: '1.5'
                    }}>
                      {tip.description}
                    </p>
                  </div>
                  <div style={{
                    color: '#10b981',
                    opacity: 0.7
                  }}>
                    <CheckIcon />
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '20px',
              padding: '16px',
              background: 'rgba(16, 185, 129, 0.05)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{
                color: '#10b981',
                fontSize: '14px',
                fontWeight: '500',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <CheckIcon />
                Following these tips can improve your results by up to 40%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;