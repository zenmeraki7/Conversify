import React, { useEffect } from 'react';

 function NotFoundPage() {
  useEffect(() => {
    // Add some interactive floating effects
    const handleMouseMove = (e) => {
      const stars = document.querySelectorAll('.star');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      stars.forEach((star, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        star.style.transform = `translate(${x}px, ${y}px) rotate(${x * 2}deg)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Add random twinkling effect
    const twinkleInterval = setInterval(() => {
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => {
        if (Math.random() > 0.8) {
          star.style.transform += ' scale(1.2)';
          setTimeout(() => {
            star.style.transform = star.style.transform.replace(' scale(1.2)', '');
          }, 200);
        }
      });
    }, 1000);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(twinkleInterval);
    };
  }, []);

  return (
    <div style={{
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: 'linear-gradient(135deg, #2d1b69 0%, #6b46c1 50%, #a855f7 100%)',
      color: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <style>{`
        .star {
          position: absolute;
          color: #60a5fa;
          font-size: 24px;
          opacity: 0.8;
          animation: float 3s ease-in-out infinite;
        }

        .star1 {
          top: 15%;
          left: 20%;
          animation-delay: -0.5s;
        }

        .star2 {
          top: 25%;
          right: 15%;
          animation-delay: -1.5s;
        }

        .star3 {
          bottom: 30%;
          right: 25%;
          animation-delay: -2s;
        }

        .star4 {
          top: 60%;
          left: 15%;
          animation-delay: -1s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.8;
          }
          25% {
            transform: translateY(-10px) rotate(5deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-5px) rotate(-3deg);
            opacity: 0.9;
          }
          75% {
            transform: translateY(-8px) rotate(2deg);
            opacity: 1;
          }
        }

        .container {
          text-align: center;
          z-index: 10;
          padding: 20px;
        }

        .error-code {
          font-size: 4rem;
          font-weight: 300;
          color: #c084fc;
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .title {
          font-size: 3rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          background: linear-gradient(45deg, #f8fafc, #e2e8f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: titleGlow 4s ease-in-out infinite;
        }

        @keyframes titleGlow {
          0%, 100% {
            transform: translateY(0px);
            filter: brightness(1);
          }
          50% {
            transform: translateY(-2px);
            filter: brightness(1.1);
          }
        }

        .description {
          font-size: 1.1rem;
          color: #cbd5e1;
          margin-bottom: 3rem;
          max-width: 500px;
          line-height: 1.6;
        }

        .highlight {
          color: #06b6d4;
          font-weight: 500;
        }

        .buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary {
          background: linear-gradient(45deg, #8b5cf6, #a855f7);
          color: white;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .support {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .support a {
          color: #06b6d4;
          text-decoration: none;
          font-weight: 500;
        }

        .support a:hover {
          text-decoration: underline;
        }

        .shooting-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: shoot 2s linear infinite;
        }

        .shooting-star::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 30px;
          height: 1px;
          background: linear-gradient(90deg, white, transparent);
          transform: translateX(-30px);
        }

        @keyframes shoot {
          0% {
            transform: translateX(-100px) translateY(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) translateY(100vh);
            opacity: 0;
          }
        }

        .shooting-star1 {
          top: 20%;
          animation-delay: 0s;
        }

        .shooting-star2 {
          top: 40%;
          animation-delay: 3s;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2.5rem;
          }
          
          .error-code {
            font-size: 3rem;
          }
          
          .buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 200px;
          }
        }
      `}</style>

      {/* Floating Stars */}
      <div className="star star1">✨</div>
      <div className="star star2">⚡</div>
      <div className="star star3">⭐</div>
      <div className="star star4">✨</div>

      {/* Shooting Stars */}
      <div className="shooting-star shooting-star1"></div>
      <div className="shooting-star shooting-star2"></div>

      <div className="container">
        <div className="error-code">404</div>
        <h1 className="title">Oops! Lost in Space</h1>
        <p className="description">
          The page you're looking for has drifted into the digital void. <span className="highlight">But don't worry</span> - we'll help you navigate back to safety!
        </p>
        
        <div className="buttons">
          <a href="#" className="btn btn-primary">
            🏠 Return Home
          </a>
          <a href="#" className="btn btn-secondary">
            ← Go Back
          </a>
        </div>
        
        <div className="support">
          Need help? <a href="#">Contact our support team</a>
        </div>
      </div>
    </div>
  );
}
export default NotFoundPage;