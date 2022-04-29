import React from 'react'
import './header.css'
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../actions/auth.actions';
import { NavLink } from 'react-router-dom';

function Header() {

  const auth = useSelector(state => state.auth);  
  const dispatch = useDispatch();
  
  const logout = () => {
    dispatch(signOut())
  }

  const renderLoggedInLinks = () => {
    return(
      <Nav>
        <li className="nav-item">
                  <span className="nav-link" style={{cursor:'pointer'}} onClick={logout} >Signout</span>
              </li>
      </Nav>
      
    )
  }

  const renderNonLoggedInLinks = () => {
    return(
      <Nav>
        <li className="nav-item">
                  <NavLink to="signin" className="nav-link">Signin</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="signup" className="nav-link">Signup</NavLink>
              </li>
      </Nav>
      
    )
  }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
          {/* <Link to="/" className="navbar-brand">Admin Dashboard</Link> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <li className="nav_list">
                   {/* <NavLink to="/" className="nav-link">HOME</NavLink> */}
                   HOME
               </li>
              <li className="nav_list">
                   {/* <NavLink to="signup" className="nav-link">Signup</NavLink> */}
                   ABOUT US
               </li>
               <li className="nav_list">
                   {/* <NavLink to="signup" className="nav-link">Signup</NavLink> */}
                   DIET PLANS
               </li>
               <li className="nav_list">
                   {/* <NavLink to="signup" className="nav-link">Signup</NavLink> */}
                   SELECT YOUR PLANS
               </li>
      </Nav>
            
              {/* <Nav.Link href="#deets">Signin</Nav.Link> */}
              
              {/* SignIn SignUp SigOut */}

              {auth.authenticate? renderLoggedInLinks() : renderNonLoggedInLinks() }
              
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    )
}

export default Header
