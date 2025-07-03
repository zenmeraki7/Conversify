import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function LoginPage ()  {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempted with:', formData);
      // In a real app, handle success/error here
    }, 2000);
  };

  const containerStyles = {
    minHeight: '100vh',
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    margin: 0,
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    left: 0
  };

  const cardStyles = {
    background: 'rgba(15, 23, 42, 0.95)',
    backdropFilter: 'blur(24px)',
    border: '1px solid rgba(148, 163, 184, 0.1)',
    borderRadius: '20px',
    padding: '48px',
    width: '100%',
    maxWidth: '460px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(148, 163, 184, 0.05)',
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '40px'
  };

  const titleStyles = {
    color: '#f8fafc',
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '8px',
    letterSpacing: '-0.02em'
  };

  const subtitleStyles = {
    color: '#94a3b8',
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '1.5'
  };

  const formGroupStyles = {
    marginBottom: '24px'
  };

  const labelStyles = {
    display: 'block',
    color: '#f1f5f9',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '8px',
    letterSpacing: '0.01em'
  };

  const inputContainerStyles = {
    position: 'relative'
  };

  const inputStyles = (hasError) => ({
    width: '100%',
    padding: '14px 16px 14px 44px',
    background: 'rgba(30, 41, 59, 0.6)',
    border: `1px solid ${hasError ? '#ef4444' : 'rgba(148, 163, 184, 0.2)'}`,
    borderRadius: '12px',
    color: '#f8fafc',
    fontSize: '15px',
    outline: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxSizing: 'border-box',
    '::placeholder': {
      color: '#64748b'
    }
  });

  const iconStyles = {
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#64748b',
    width: '18px',
    height: '18px'
  };

  const passwordToggleStyles = {
    position: 'absolute',
    right: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: '#64748b',
    cursor: 'pointer',
    padding: '4px',
    borderRadius: '6px',
    transition: 'color 0.2s ease'
  };

  const errorStyles = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '6px',
    color: '#ef4444',
    fontSize: '13px',
    fontWeight: '400'
  };

  const checkboxContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '32px'
  };

  const checkboxLabelStyles = {
    display: 'flex',
    alignItems: 'center',
    color: '#cbd5e1',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: '400'
  };

  const checkboxStyles = {
    marginRight: '10px',
    accentColor: '#3b82f6',
    width: '16px',
    height: '16px'
  };

  const forgotLinkStyles = {
    color: '#3b82f6',
    fontSize: '14px',
    fontWeight: '500',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
    ':hover': {
      color: '#60a5fa'
    }
  };

  const buttonStyles = {
    width: '100%',
    padding: '16px',
    background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
    border: 'none',
    borderRadius: '12px',
    color: '#ffffff',
    fontSize: '15px',
    fontWeight: '600',
    cursor: isLoading ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: isLoading ? 0.7 : 1,
    marginBottom: '28px',
    letterSpacing: '0.01em',
    boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.3)'
  };

  const dividerStyles = {
    display: 'flex',
    alignItems: 'center',
    margin: '28px 0',
    color: '#64748b',
    fontSize: '13px',
    fontWeight: '400'
  };

  const dividerLineStyles = {
    flex: 1,
    height: '1px',
    background: 'rgba(148, 163, 184, 0.15)'
  };

  const socialButtonStyles = {
    width: '100%',
    padding: '14px',
    background: 'rgba(30, 41, 59, 0.6)',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    borderRadius: '12px',
    color: '#f1f5f9',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const signupLinkStyles = {
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: '14px',
    marginTop: '32px',
    fontWeight: '400'
  };

  const linkStyles = {
    color: '#3b82f6',
    fontWeight: '500',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s ease'
  };

  return (
    <div style={containerStyles}>
      <div style={cardStyles}>
        <div style={headerStyles}>
          <h1 style={titleStyles}>Welcome Back</h1>
          <p style={subtitleStyles}>Please sign in to your account to continue</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={formGroupStyles}>
            <label style={labelStyles}>Email Address</label>
            <div style={inputContainerStyles}>
              <Mail style={iconStyles} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={inputStyles(errors.email)}
                placeholder="Enter your email address"
                onFocus={(e) => {
                  if (!errors.email) {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                  }
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = errors.email ? '#ef4444' : 'rgba(148, 163, 184, 0.2)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            {errors.email && (
              <div style={errorStyles}>
                <AlertCircle style={{ width: '14px', height: '14px', marginRight: '6px' }} />
                {errors.email}
              </div>
            )}
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Password</label>
            <div style={inputContainerStyles}>
              <Lock style={iconStyles} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                style={{ ...inputStyles(errors.password), paddingRight: '50px' }}
                placeholder="Enter your password"
                onFocus={(e) => {
                  if (!errors.password) {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                  }
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = errors.password ? '#ef4444' : 'rgba(148, 163, 184, 0.2)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={passwordToggleStyles}
                onMouseEnter={(e) => e.target.style.color = '#94a3b8'}
                onMouseLeave={(e) => e.target.style.color = '#64748b'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <div style={errorStyles}>
                <AlertCircle style={{ width: '14px', height: '14px', marginRight: '6px' }} />
                {errors.password}
              </div>
            )}
          </div>

          <div style={checkboxContainerStyles}>
            <label style={checkboxLabelStyles}>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                style={checkboxStyles}
              />
              Remember me for 30 days
            </label>
            <a 
              style={forgotLinkStyles}
              onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
              onMouseLeave={(e) => e.target.style.color = '#3b82f6'}
              onClick={() => navigate('/forgot-password')}
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={buttonStyles}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 8px 25px 0 rgba(59, 130, 246, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 14px 0 rgba(59, 130, 246, 0.3)';
              }
            }}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div style={dividerStyles}>
          <div style={dividerLineStyles}></div>
          <span style={{ margin: '0 20px' }}>Or continue with</span>
          <div style={dividerLineStyles}></div>
        </div>

        <button
          style={socialButtonStyles}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(30, 41, 59, 0.8)';
            e.target.style.borderColor = 'rgba(148, 163, 184, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(30, 41, 59, 0.6)';
            e.target.style.borderColor = 'rgba(148, 163, 184, 0.2)';
          }}
          onClick={() => console.log('Google sign in clicked')}
        >
          <svg style={{ marginRight: '12px', width: '18px', height: '18px' }} viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        <div style={signupLinkStyles}>
          Don't have an account?{' '}
          <a 
            style={linkStyles}
            onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
            onMouseLeave={(e) => e.target.style.color = '#3b82f6'}
            onClick={() => navigate('/sign-up')}
          >
            Create one here
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;