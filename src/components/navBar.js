import React from 'react'

const NavBar = ({ handleScroll, refs }) => {
  const { section1Ref, section2Ref, section3Ref } = refs;

  return (
    <div
    style={{
        height: '100px',
        width: '100%',
        backgroundColor: 'white',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '1000',
        display: 'flex',
        justifyContent:'flex-end'
    }}
    >
      <ul
      
      style={{
        display: 'flex',
        listStyleType: 'none',
        margin: '0',
        padding: '0',
        alignItems: 'center',
        height: '100px',
        fontSize: '20px',
        fontFamily: 'Arial, sans-serif',
        cursor: 'pointer',
        marginRight: '70px',
      }}
      >
        <li
        onClick={() => handleScroll(section1Ref)}
        style={{color: 'black', marginRight: '20px', cursor:"pointer"}}
        >About</li>
        <li
        onClick={() => handleScroll(section2Ref)}
        style={{color: 'black', marginRight: '20px', cursor:"pointer"}}
        >Experience</li>

        <li
        onClick={() => handleScroll(section3Ref)}
        style={{color: 'black', marginRight: '20px', cursor:"pointer"}}
        >Projects</li>
      </ul>
        
    </div>
  )
}

export default NavBar