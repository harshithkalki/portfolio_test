import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Body = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div
      style={{
        height: isMobile ? 'auto' : '45vh',
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '100px',
        padding: isMobile ? '20px' : '0',
      }}
    >
      <div
        style={{
          width: isMobile ? '100%' : '60%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            marginTop: isMobile ? '10px' : '30px',
            width: isMobile ? '100%' : '60%',
            height: isMobile ? 'auto' : '50%',
            padding: '20px',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <span
            style={{
              fontSize: isMobile ? '28px' : '40px',
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif',
              color: 'black',
            }}
          >
            Hi, I am Sai Palkonda,
            <br />
            Java Developer
            <br />
          </span>
          <p
            style={{
              fontSize: isMobile ? '16px' : '18px',
              fontFamily: 'Arial, sans-serif',
              color: 'gray',
              marginTop: '30px',
            }}
          >
            Java developer with experience in building efficient,
            scalable applications using core Java and frameworks like Spring.
            Passionate about clean code and problem-solving.
          </p>
        </div>
      </div>
      <div
        style={{
          width: isMobile ? '100%' : '40%',
          height: isMobile ? 'auto' : '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: isMobile ? '20px' : '0',
        }}
      >
        <img
          src="user.jpeg"
          alt="user"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            border: '15px solid black',
            height: isMobile ? '70vw' : '70%',
            borderRadius: '50%',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>
    </div>
  );
};

export default Body