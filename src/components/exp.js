import React from 'react';
import { useState, useEffect } from 'react';


const Exp = () => {
     const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      const fullText = "Java developer with experience in building efficient, scalable applications using core Java and frameworks like Spring. Passionate about clean code and problem-solving.with experience in building efficient, scalable applications using core Java and frameworks like Spring. Passionate about clean code and problem-solving.with experience in building efficient, scalable applications using core Java and frameworks like Spring. Passionate about clean code and problem-solving.";

const limitedText = fullText.split(' ').slice(0, 40).join(' ') + '...';
  return (
    <div
    style={{
        height: isMobile?'auto':'auto',
        maxHeight: isMobile?'auto':'45vh',
        width: isMobile?'90%':'25vw',
        backgroundColor: 'white',
        // border: '1px solid black',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: '10px',
        padding: '18px'
        
    }}
    >
        <p
        style={{
            fontSize:'20px',
            height:'18%',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
            color: 'black',

        }}
        >
            Experience as a Java Developer at TCS, Hyderabad, India
        </p>

        <div
        style={{
            width:'80%',
            height:'10%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '10px',
            fontSize: '15px',
            fontFamily: 'Arial, sans-serif',
            color: 'gray',
    
            textAlign: 'justify',
        }}
        >
            <p>2002 - 2005</p>|
            <p>
                Java Developer
            </p>
        </div>
        <p
        style={{
            width:'auto',
            height:'50%',
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            color: 'gray',
            marginTop: '10px',
            padding: '10px',
            backgroundColor: '#f9f9f9',
            
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        }}>
            { limitedText}
            </p>
    </div>
  )
}

export default Exp