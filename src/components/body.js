import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Exp from './exp';

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
    <div>
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
              fontSize: isMobile ? '30px' : '45px',
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
              fontSize: isMobile ? '18px' : '20px',
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
      {/* Responsive image container */}
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
            border: '18px solid #a9e9f5',
            height: isMobile ? '70vw' : '70%',
            borderRadius: '50%',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>
    </div>
    {/* <div
    style={{
        height: '45vh',
        width: isMobile?'95%':'25vw',
        backgroundColor: 'white',
       
    }}
    >
      <Exp />
    </div> */}
    <div
    style={{
        marginTop: '20px',
        width:'100%',
        height: isMobile?'auto':'10vh',
        textAlign: 'center',
        fontSize: isMobile?'30px':'40px',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        color: 'black',
        padding: '10px',
        marginBottom: '20px',
    }}
    >
        MY EXPERIENCE

    </div>
    <div
    style={{
        display: 'grid',
        width:isMobile?'100%':'80%',
        margin:'auto',
        height:'auto',
        padding: '20px',
        paddingLeft:'25px',
        backgroundColor:'#b8f2fc',
        gridTemplateColumns:isMobile?'1fr': 'repeat(3, 1fr)',
        gap: '15px',
        borderRadius: '10px',
        
    }}
    >
        <Exp />
        <Exp />
        <Exp />
        <Exp />
        <Exp />
        <Exp />

    </div>
    <div
    style={{
        marginTop: '20px',
        width:'100%',
        height: isMobile?'auto':'10vh',
        textAlign: 'center',
        fontSize: isMobile?'30px':'40px',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        color: 'black',
        padding: '10px',
        marginBottom: '20px',
    }}
    >
        My Projects

    </div>
    </div>

  );
};

export default Body