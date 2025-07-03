import React, { useState } from 'react';
import { Lock, ArrowLeft, CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ResetPasswordPage() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validatePassword = (password) => {
 
    const errors = [];
    if (password.length < 8) {
      errors.push('at least 8 characters');
    }
    if (!/(?=.*[a-z])/.test(password)) {
      errors.push('one lowercase letter');
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.push('one uppercase letter');
    }
    if (!/(?=.*\d)/.test(password)) {
      errors.push('one number');
    }
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {};

    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else {
      const passwordErrors = validatePassword(formData.password);
      if (passwordErrors.length > 0) {
        newErrors.password = `Password must contain ${passwordErrors.join(', ')}`;
      }
    }

    // Validate confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      console.log('Password reset successfully');
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
    padding: '14px 50px 14px 44px',
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

  const toggleButtonStyles = {
    position: 'absolute',
    right: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: '#64748b',
    cursor: 'pointer',
    padding: '4px',
    transition: 'color 0.2s ease'
  };

  const errorStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '6px',
    color: '#ef4444',
    fontSize: '13px',
    fontWeight: '400',
    lineHeight: '1.4'
  };

  const passwordRequirementsStyles = {
    marginTop: '12px',
    padding: '12px',
    background: 'rgba(30, 41, 59, 0.3)',
    borderRadius: '8px',
    border: '1px solid rgba(148, 163, 184, 0.1)'
  };

  const requirementsTitleStyles = {
    color: '#94a3b8',
    fontSize: '13px',
    fontWeight: '500',
    marginBottom: '8px'
  };

  const requirementItemStyles = (isValid) => ({
    display: 'flex',
    alignItems: 'center',
    color: isValid ? '#10b981' : '#64748b',
    fontSize: '12px',
    marginBottom: '4px'
  });

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
    marginTop: '8px',
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

  // Password validation checks
  const passwordValidation = {
    length: formData.password.length >= 8,
    lowercase: /(?=.*[a-z])/.test(formData.password),
    uppercase: /(?=.*[A-Z])/.test(formData.password),
    number: /(?=.*\d)/.test(formData.password)
  };

  if (isSuccess) {
    return (
      <div style={containerStyles}>
        <div style={cardStyles}>
          <div style={successContainerStyles}>
            <CheckCircle style={successIconStyles} />
            <h1 style={successTitleStyles}>Password Reset Successfully!</h1>
            <p style={successMessageStyles}>
              Your password has been reset successfully.<br />
              You can now sign in with your new password.
            </p>
            
            <button
              onClick={() => navigate('/login')}
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
              Continue to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyles}>
      <div style={cardStyles}>
        <button
              onClick={() => navigate('/login')}
          style={backButtonStyles}
          onMouseEnter={(e) => e.target.style.color = '#94a3b8'}
          onMouseLeave={(e) => e.target.style.color = '#64748b'}
        >
          <ArrowLeft style={{ width: '16px', height: '16px', marginRight: '8px' }} />
          Back to Login
        </button>

        <div style={headerStyles}>
          <h1 style={titleStyles}>Reset Your Password</h1>
          <p style={subtitleStyles}>
            Create a new password for your account. Make sure it's strong and secure.
          </p>
        </div>

        <div>
          <div style={formGroupStyles}>
            <label style={labelStyles}>New Password</label>
            <div style={inputContainerStyles}>
              <Lock style={iconStyles} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                style={inputStyles(errors.password)}
                placeholder="Enter your new password"
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
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSubmit(e);
                  }
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={toggleButtonStyles}
                onMouseEnter={(e) => e.target.style.color = '#94a3b8'}
                onMouseLeave={(e) => e.target.style.color = '#64748b'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <div style={errorStyles}>
                <AlertCircle style={{ width: '14px', height: '14px', marginRight: '6px', marginTop: '1px', flexShrink: 0 }} />
                {errors.password}
              </div>
            )}
            
            {formData.password && (
              <div style={passwordRequirementsStyles}>
                <div style={requirementsTitleStyles}>Password Requirements:</div>
                <div style={requirementItemStyles(passwordValidation.length)}>
                  <span style={{ marginRight: '8px' }}>{passwordValidation.length ? '✓' : '○'}</span>
                  At least 8 characters
                </div>
                <div style={requirementItemStyles(passwordValidation.lowercase)}>
                  <span style={{ marginRight: '8px' }}>{passwordValidation.lowercase ? '✓' : '○'}</span>
                  One lowercase letter
                </div>
                <div style={requirementItemStyles(passwordValidation.uppercase)}>
                  <span style={{ marginRight: '8px' }}>{passwordValidation.uppercase ? '✓' : '○'}</span>
                  One uppercase letter
                </div>
                <div style={requirementItemStyles(passwordValidation.number)}>
                  <span style={{ marginRight: '8px' }}>{passwordValidation.number ? '✓' : '○'}</span>
                  One number
                </div>
              </div>
            )}
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Confirm New Password</label>
            <div style={inputContainerStyles}>
              <Lock style={iconStyles} />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                style={inputStyles(errors.confirmPassword)}
                placeholder="Confirm your new password"
                onFocus={(e) => {
                  if (!errors.confirmPassword) {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                  }
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = errors.confirmPassword ? '#ef4444' : 'rgba(148, 163, 184, 0.2)';
                  e.target.style.boxShadow = 'none';
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSubmit(e);
                  }
                }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={toggleButtonStyles}
                onMouseEnter={(e) => e.target.style.color = '#94a3b8'}
                onMouseLeave={(e) => e.target.style.color = '#64748b'}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <div style={errorStyles}>
                <AlertCircle style={{ width: '14px', height: '14px', marginRight: '6px', marginTop: '1px', flexShrink: 0 }} />
                {errors.confirmPassword}
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
            {isLoading ? 'Resetting Password...' : 'Reset Password'}
          </button>
        </div>

        <p style={helpTextStyles}>
          Remember your password?{' '}
          <button
              onClick={() => navigate('/login')}
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

export default ResetPasswordPage;