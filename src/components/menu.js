
import React, { useState,useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';         

import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';

  const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    
  
    return (
      <div className='menu-top'>
       
        
        <Navbar className='menu' color="tranparent" light expand="md">
          <NavbarBrand   href="/"><p className='simple'>SIMPLY<sup>®</sup></p></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav  navbar>
            <NavItem className='menu-bar'>
                <NavLink className='menu-bar-1' href="/">Home</NavLink>
              </NavItem>
              <NavItem className='menu-bar'>
                <NavLink className='menu-bar-1' href="/Shop/">Shop</NavLink>
              </NavItem>
              <NavItem className='menu-bar'  >
                <NavLink className='menu-bar-1'  href="/Gift-ideas/">Gift ideas</NavLink>
              </NavItem>
              <NavItem className='menu-bar'>
                <NavLink className='menu-bar-1' href="/Businesses/">Businesses</NavLink>
              </NavItem>
              <NavItem className='menu-bar' >
                <NavLink className='menu-bar-1' href="/Brand/">Brand</NavLink>
              </NavItem>
              <NavItem  className='menu-bar'>
                <NavLink className='menu-bar-1' href="/Active/">Active</NavLink>
              </NavItem>
              <NavItem  className='menu-bar'>
                <NavLink className='menu-bar-1' href="/Contact/">Contact</NavLink>
              </NavItem>
              <NavItem className='menu-bar'>
                <NavLink className='menu-bar-1' href="/LogIn/">Log In</NavLink>
              </NavItem>
              <UncontrolledDropdown nav rightNavbar>
                <DropdownToggle className='simple'   nav caret>
                  INT
                </DropdownToggle>
                <DropdownMenu center>
                  <DropdownItem href="/option1/">DE</DropdownItem>
                  <DropdownItem href="/option2/">DK</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
                       
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  };
  
  export default Menu;
