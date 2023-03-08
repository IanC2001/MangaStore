import React from 'react'
import '../App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const NavBar = () => {
  return (
    <nav className='Cabecera'>
      <h1 id='h1'>Enviós a toda Argentina</h1>
        <DropdownButton id="DropdownButton"
          title="ARS">
          <Dropdown.Item href="#">EUROS</Dropdown.Item>
          <Dropdown.Item href="#">USD</Dropdown.Item>
        </DropdownButton>
  </nav>
  
  )
}

export default NavBar;