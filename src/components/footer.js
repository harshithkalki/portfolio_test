import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div
    style={{
    marginTop: '10vh',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  }}
    >
         <a href="https://twitter.com/" style={{
            color: 'inherit',
            textDecoration: 'none',
         }} target="_blank" rel="noopener noreferrer">
        <FaTwitter size={50} />
        </a>
        <a href="https://github.com/SaiPalkonda" style={{
            color: 'inherit',
            textDecoration: 'none',
         }} target="_blank" rel="noopener noreferrer">
        <FaGithub size={50} />
        </a>
        <a href="https://www.linkedin.com/in/saipalkonda/" style={{
            color: 'inherit',
            textDecoration: 'none',
         }} target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={50} />
        </a>
        
    </div>
  )
}

export default Footer