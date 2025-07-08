export const themes = {
  light: {
    // Background colors
    background: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
      card: 'rgba(255, 255, 255, 0.9)',
      overlay: 'rgba(255, 255, 255, 0.95)',
      gradient: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
      radialGradient: `
        radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.03) 0%, transparent 50%),
        linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)
      `
    },
    
    // Text colors
    text: {
      primary: '#1e293b',
      secondary: '#475569',
      tertiary: '#64748b',
      accent: '#6366f1',
      muted: '#94a3b8',
      inverse: '#ffffff'
    },
    
    // Border colors
    border: {
      primary: 'rgba(148, 163, 184, 0.3)',
      secondary: 'rgba(99, 102, 241, 0.2)',
      accent: 'rgba(99, 102, 241, 0.4)',
      muted: 'rgba(148, 163, 184, 0.1)'
    },
    
    // Component-specific colors
    card: {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 50%, rgba(241, 245, 249, 0.7) 100%)',
      border: '2px solid rgba(99, 102, 241, 0.15)',
      shadow: '0 20px 40px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 60px rgba(99, 102, 241, 0.05)'
    },
    
    sidebar: {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)',
      border: '2px solid rgba(99, 102, 241, 0.15)',
      shadow: '0 20px 40px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
    },
    
    button: {
      primary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      secondary: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
      border: '2px solid rgba(99, 102, 241, 0.2)'
    },
    
    input: {
      background: 'rgba(248, 250, 252, 0.8)',
      border: '2px solid rgba(148, 163, 184, 0.2)',
      focusBorder: '#6366f1',
      focusShadow: '0 0 0 4px rgba(99, 102, 241, 0.1)'
    },
    
    toggle: {
      background: 'rgba(148, 163, 184, 0.3)',
      activeBackground: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      border: 'rgba(148, 163, 184, 0.3)',
      activeBorder: 'rgba(99, 102, 241, 0.5)',
      thumb: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      activeThumb: '#ffffff'
    }
  },
  
  dark: {
    // Background colors
    background: {
      primary: '#0f0f23',
      secondary: '#1a1a2e',
      tertiary: '#16213e',
      card: 'rgba(26, 26, 46, 0.7)',
      overlay: 'rgba(15, 15, 35, 0.95)',
      gradient: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      radialGradient: `
        radial-gradient(circle at 20% 50%, rgba(5, 6, 87, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
        linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)
      `
    },
    
    // Text colors
    text: {
      primary: '#f8fafc',
      secondary: '#e2e8f0',
      tertiary: '#cbd5e1',
      accent: '#6366f1',
      muted: '#94a3b8',
      inverse: '#1e293b'
    },
    
    // Border colors
    border: {
      primary: 'rgba(99, 102, 241, 0.3)',
      secondary: 'rgba(99, 102, 241, 0.2)',
      accent: 'rgba(99, 102, 241, 0.5)',
      muted: 'rgba(99, 102, 241, 0.1)'
    },
    
    // Component-specific colors
    card: {
      background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.7) 0%, rgba(22, 33, 62, 0.5) 50%, rgba(15, 15, 35, 0.6) 100%)',
      border: '2px solid rgba(99, 102, 241, 0.3)',
      shadow: '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 60px rgba(99, 102, 241, 0.1)'
    },
    
    sidebar: {
      background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.6) 100%)',
      border: '2px solid rgba(99, 102, 241, 0.3)',
      shadow: '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
    },
    
    button: {
      primary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      secondary: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)',
      border: '2px solid rgba(99, 102, 241, 0.3)'
    },
    
    input: {
      background: 'rgba(30, 41, 59, 0.6)',
      border: '2px solid rgba(148, 163, 184, 0.2)',
      focusBorder: '#6366f1',
      focusShadow: '0 0 0 4px rgba(99, 102, 241, 0.1)'
    },
    
    toggle: {
      background: 'rgba(148, 163, 184, 0.3)',
      activeBackground: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      border: 'rgba(148, 163, 184, 0.2)',
      activeBorder: 'rgba(99, 102, 241, 0.5)',
      thumb: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      activeThumb: '#ffffff'
    }
  }
};