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

const ScanIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
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

const drawerWidth = 280;
const collapsedDrawerWidth = 64;

const AIDetectorContent = ({ sidebarOpen }) => {
  const [inputText, setInputText] = useState('');
  const [sensitivity, setSensitivity] = useState('Balanced');
  const [showSensitivityDropdown, setShowSensitivityDropdown] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const sensitivityOptions = ['Low', 'Balanced', 'High', 'Maximum'];

  const tips = [
    {
      title: "Input Quality Matters",
      description: "Ensure your text is complete and well-formatted for the most accurate detection results",
      icon: "📝"
    },
    {
      title: "Sensitivity Settings",
      description: "Use 'Balanced' for general content, 'High' for academic work, 'Maximum' for strict verification",
      icon: "⚖️"
    },
    {
      title: "Context Awareness",
      description: "The detector works best with substantial text (100+ words) to analyze patterns effectively",
      icon: "🧠"
    },
    {
      title: "Review Results",
      description: "Always review the detailed analysis - no detector is 100% accurate, use results as guidance",
      icon: "🔍"
    },
    {
      title: "Multiple Sources",
      description: "For critical decisions, cross-reference with other detection tools and human review",
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
    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: '1.2',
  };

  const chipStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#8b5cf6',
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
    border: '1px solid rgba(139, 92, 246, 0.2)',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  };

  const textareaStyles = {
    width: '100%',
    height: '256px',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(139, 92, 246, 0.3)',
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
    border: '1px solid rgba(139, 92, 246, 0.3)',
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
    borderColor: '#8b5cf6',
    color: '#fff',
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
  };

  const primaryButtonStyles = {
    padding: '12px 32px',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    border: 'none',
    color: '#fff',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 600,
    transition: 'all 0.2s ease-in-out',
  };

  const primaryButtonHoverStyles = {
    background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(139, 92, 246, 0.4)',
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
    border: '1px solid rgba(139, 92, 246, 0.3)',
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
    border: '1px solid rgba(139, 92, 246, 0.3)',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
  };

  const tipsContainerStyles = {
    marginTop: '24px',
    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(124, 58, 237, 0.03) 100%)',
    border: '1px solid rgba(139, 92, 246, 0.2)',
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
    borderBottom: showTips ? '1px solid rgba(139, 92, 246, 0.2)' : 'none',
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
    background: 'rgba(139, 92, 246, 0.03)',
    border: '1px solid rgba(139, 92, 246, 0.1)',
    borderRadius: '8px',
    marginBottom: '12px',
    transition: 'all 0.2s ease-in-out',
  };

  const resultCardStyles = {
    marginTop: '24px',
    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(124, 58, 237, 0.05) 100%)',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    borderRadius: '12px',
    padding: '24px',
    animation: 'slideInUp 0.5s ease-out',
  };

  const handleSampleText = () => {
    setInputText("The rapid advancement of artificial intelligence has transformed numerous industries and aspects of daily life. Machine learning algorithms now power recommendation systems, autonomous vehicles, and medical diagnostics. These sophisticated systems analyze vast amounts of data to identify patterns and make predictions with remarkable accuracy. As AI continues to evolve, researchers focus on developing more interpretable and ethical AI systems that can benefit society while minimizing potential risks.");
  };

  const handlePasteText = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputText(text);
    } catch (err) {
      console.log('Failed to read clipboard contents: ', err);
    }
  };

  const handleDetection = () => {
    if (inputText.trim()) {
      // Simulate AI detection analysis
      const aiScore = Math.floor(Math.random() * 100);
      const humanScore = 100 - aiScore;
      
      setScanResult({
        aiProbability: aiScore,
        humanProbability: humanScore,
        confidence: Math.floor(Math.random() * 40) + 60,
        wordsAnalyzed: inputText.trim().split(' ').length,
        detectedPatterns: [
          'Consistent sentence structure',
          'Formal vocabulary usage',
          'Limited stylistic variation'
        ]
      });
    }
  };

  return (
    <div style={mainContentStyles}>
      <style>{`
        @keyframes tipGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(139, 92, 246, 0.2);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tip-item:hover {
          background: rgba(139, 92, 246, 0.08) !important;
          border-color: rgba(139, 92, 246, 0.3) !important;
          transform: translateY(-2px);
          animation: tipGlow 2s ease-in-out infinite;
        }

        .tips-header:hover {
          background: rgba(139, 92, 246, 0.05);
        }

        .icon-emoji {
          font-size: 20px;
          padding: 8px;
          background: rgba(139, 92, 246, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 36px;
          height: 36px;
        }

        .result-meter {
          position: relative;
          height: 20px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          overflow: hidden;
        }

        .result-fill {
          height: 100%;
          background: linear-gradient(90deg, #ef4444 0%, #f97316 50%, #8b5cf6 100%);
          border-radius: 10px;
          transition: width 1s ease-out;
        }
      `}</style>

      {/* Header */}
      <div style={headerStyles}>
        <h1 style={titleStyles}>
          Detect AI-Generated Content
        </h1>
        
        <div 
          style={chipStyles}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        >
          🔍 Advanced AI Detection Technology →
        </div>
      </div>

      {/* Main Content Card */}
      <div style={cardStyles}>
        {/* Text Input Area */}
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Paste the text you want to analyze for AI generation here..."
          style={textareaStyles}
          onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(139, 92, 246, 0.3)'}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: '#a1a1aa', fontSize: '16px' }}>Sensitivity:</span>
            
            <div style={selectStyles}>
              <button
                onClick={() => setShowSensitivityDropdown(!showSensitivityDropdown)}
                style={{
                  ...selectButtonStyles,
                  borderColor: showSensitivityDropdown ? '#8b5cf6' : 'rgba(139, 92, 246, 0.3)',
                }}
              >
                {sensitivity}
                <ChevronDownIcon />
              </button>
              
              {showSensitivityDropdown && (
                <div style={dropdownStyles}>
                  {sensitivityOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSensitivity(option);
                        setShowSensitivityDropdown(false);
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
                        borderRadius: option === sensitivityOptions[0] ? '8px 8px 0 0' : option === sensitivityOptions[sensitivityOptions.length - 1] ? '0 0 8px 8px' : '0',
                        transition: 'background-color 0.2s ease-in-out',
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(139, 92, 246, 0.2)'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            style={{
              ...primaryButtonStyles,
              ...(isPrimaryHovered ? primaryButtonHoverStyles : {}),
            }}
            onMouseEnter={() => setIsPrimaryHovered(true)}
            onMouseLeave={() => setIsPrimaryHovered(false)}
            onClick={handleDetection}
          >
            <ScanIcon />
            Analyze Text
          </button>
        </div>

        {/* Results Section */}
        {scanResult && (
          <div style={resultCardStyles}>
            <h3 style={{ color: '#8b5cf6', fontSize: '20px', fontWeight: '600', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldIcon />
              Detection Results
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px' }}>
              <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '16px', borderRadius: '8px' }}>
                <h4 style={{ color: '#ef4444', fontSize: '16px', marginBottom: '8px' }}>AI Generated</h4>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ef4444', marginBottom: '8px' }}>
                  {scanResult.aiProbability}%
                </div>
                <div className="result-meter">
                  <div 
                    className="result-fill" 
                    style={{ width: `${scanResult.aiProbability}%`, background: '#ef4444' }}
                  />
                </div>
              </div>
              
              <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '16px', borderRadius: '8px' }}>
                <h4 style={{ color: '#10b981', fontSize: '16px', marginBottom: '8px' }}>Human Written</h4>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981', marginBottom: '8px' }}>
                  {scanResult.humanProbability}%
                </div>
                <div className="result-meter">
                  <div 
                    className="result-fill" 
                    style={{ width: `${scanResult.humanProbability}%`, background: '#10b981' }}
                  />
                </div>
              </div>
              
              <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '16px', borderRadius: '8px' }}>
                <h4 style={{ color: '#f59e0b', fontSize: '16px', marginBottom: '8px' }}>Confidence</h4>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b', marginBottom: '8px' }}>
                  {scanResult.confidence}%
                </div>
                <div style={{ fontSize: '14px', color: '#94a3b8' }}>
                  {scanResult.wordsAnalyzed} words analyzed
                </div>
              </div>
            </div>
            
            <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '16px', borderRadius: '8px' }}>
              <h4 style={{ color: '#94a3b8', fontSize: '16px', marginBottom: '12px' }}>Detected Patterns:</h4>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                {scanResult.detectedPatterns.map((pattern, index) => (
                  <li key={index} style={{ color: '#cbd5e1', marginBottom: '4px' }}>{pattern}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

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
                background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                borderRadius: '8px',
                color: '#fff'
              }}>
                <ShieldIcon />
              </div>
              <div>
                <h3 style={{
                  color: '#f8fafc',
                  fontSize: '16px',
                  fontWeight: '600',
                  margin: 0,
                  marginBottom: '2px'
                }}>
                  Detection Best Practices
                </h3>
                <p style={{
                  color: '#94a3b8',
                  fontSize: '14px',
                  margin: 0
                }}>
                  {showTips ? 'Click to hide detection tips' : 'Click to view detection optimization tips'}
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
                    color: '#8b5cf6',
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
              background: 'rgba(139, 92, 246, 0.05)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{
                color: '#8b5cf6',
                fontSize: '14px',
                fontWeight: '500',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <CheckIcon />
                Our AI detection accuracy improves with longer, more complete text samples
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDetectorContent;