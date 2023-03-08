import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';



const Navbar = () => {
  
  return (
    <nav className='navFlex nav'>
       <Link to ="/"> <a href='#'><img className="logoImg" src="../logo.png"></img></a></Link>
        
        <Dropdown>
        <Dropdown.Toggle id="DropdownButton">
        Categorias
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="/categoria/Terror">Terror</Dropdown.Item>
            <Dropdown.Item href="/categoria/Aventura">Aventura</Dropdown.Item>
            <Dropdown.Item href="/categoria/Romance">Romance</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>

        <CartWidget/>
    </nav>
  )
}

export default Navbar 