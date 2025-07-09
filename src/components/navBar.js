import React from 'react'

const NavBar = () => {
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
        <li style={{color: 'black', marginRight: '20px', cursor:"pointer"}}
        ><a
        href="https://github.com/SaiPalkonda"
        style={{textDecoration: 'none', color: 'black'}}
        >Projects
          </a></li>
        <li style={{color: 'black', marginRight: '20px', cursor:"pointer"}}>Contact</li>
      </ul>
        
    </div>
  )
}

export default NavBar