import React, { useState } from 'react';
import { Mail, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email address is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      console.log('Password reset requested for:', email);
    }, 2000);
  };

  const handleBackToLogin = () => {
    console.log('Navigate back to login');
    // In a real app: navigate('/login')
  };

  const handleTryAgain = () => {
    setIsSuccess(false);
    setEmail('');
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

  const backButtonStyles = {
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    color: '#64748b',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    marginBottom: '32px',
    padding: '8px 0',
    transition: 'color 0.2s ease'
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
    marginBottom: '32px'
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
    boxSizing: 'border-box'
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

  const errorStyles = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '6px',
    color: '#ef4444',
    fontSize: '13px',
    fontWeight: '400'
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

  const successContainerStyles = {
    textAlign: 'center',
    padding: '20px 0'
  };

  const successIconStyles = {
    width: '64px',
    height: '64px',
    color: '#10b981',
    margin: '0 auto 24px'
  };

  const successTitleStyles = {
    color: '#f8fafc',
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '12px'
  };

  const successMessageStyles = {
    color: '#94a3b8',
    fontSize: '15px',
    lineHeight: '1.6',
    marginBottom: '32px'
  };

  const emailHighlightStyles = {
    color: '#3b82f6',
    fontWeight: '500'
  };

  const linkButtonStyles = {
    background: 'none',
    border: 'none',
    color: '#3b82f6',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    textDecoration: 'underline',
    transition: 'color 0.2s ease'
  };

  const helpTextStyles = {
    color: '#64748b',
    fontSize: '14px',
    textAlign: 'center',
    lineHeight: '1.5',
    marginTop: '24px'
  };

  if (isSuccess) {
    return (
      <div style={containerStyles}>
        <div style={cardStyles}>
          <button
            onClick={handleBackToLogin}
            style={backButtonStyles}
            onMouseEnter={(e) => e.target.style.color = '#94a3b8'}
            onMouseLeave={(e) => e.target.style.color = '#64748b'}
          >
            <ArrowLeft style={{ width: '16px', height: '16px', marginRight: '8px' }} />
            Back to Login
          </button>

          <div style={successContainerStyles}>
            <CheckCircle style={successIconStyles} />
            <h1 style={successTitleStyles}>Check Your Email</h1>
            <p style={successMessageStyles}>
              We've sent a password reset link to<br />
              <span style={emailHighlightStyles}>{email}</span>
            </p>
            
            <button
              onClick={handleBackToLogin}
              style={buttonStyles}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 8px 25px 0 rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 14px 0 rgba(59, 130, 246, 0.3)';
              }}
            >
              Back to Login
            </button>

            <p style={helpTextStyles}>
              Didn't receive the email? Check your spam folder or{' '}
              <button
                onClick={handleTryAgain}
                style={linkButtonStyles}
                onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                onMouseLeave={(e) => e.target.style.color = '#3b82f6'}
              >
                try again
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyles}>
      <div style={cardStyles}>
        <button
          onClick={handleBackToLogin}
          style={backButtonStyles}
          onMouseEnter={(e) => e.target.style.color = '#94a3b8'}
          onMouseLeave={(e) => e.target.style.color = '#64748b'}
        >
          <ArrowLeft style={{ width: '16px', height: '16px', marginRight: '8px' }} />
          Back to Login
        </button>

        <div style={headerStyles}>
          <h1 style={titleStyles}>Forgot Password?</h1>
          <p style={subtitleStyles}>
            No worries! Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        <div>
          <div style={formGroupStyles}>
            <label style={labelStyles}>Email Address</label>
            <div style={inputContainerStyles}>
              <Mail style={iconStyles} />
              <input
                type="email"
                value={email}
                onChange={handleInputChange}
                style={inputStyles(error)}
                placeholder="Enter your email address"
                onFocus={(e) => {
                  if (!error) {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                  }
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = error ? '#ef4444' : 'rgba(148, 163, 184, 0.2)';
                  e.target.style.boxShadow = 'none';
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSubmit(e);
                  }
                }}
              />
            </div>
            {error && (
              <div style={errorStyles}>
                <AlertCircle style={{ width: '14px', height: '14px', marginRight: '6px' }} />
                {error}
              </div>
            )}
          </div>

          <button
            onClick={handleSubmit}
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
            {isLoading ? 'Sending Reset Link...' : 'Send Reset Link'}
          </button>
        </div>

        <p style={helpTextStyles}>
          Remember your password?{' '}
          <button
            onClick={handleBackToLogin}
            style={linkButtonStyles}
            onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
            onMouseLeave={(e) => e.target.style.color = '#3b82f6'}
          >
            Sign in here
          </button>
        </p>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;