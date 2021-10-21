import { MDBCollapse, MDBContainer, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler } from 'mdb-react-ui-kit'
import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [showBasic, setShowBasic] = useState(false)
  return (
    <>
      <MDBNavbar expand="lg" light bgColor="primary" >
        <MDBContainer fluid>
          <MDBNavbarBrand className="text-white">
            <span style={{marginRight: "10px"}} >
              <MDBIcon fab icon="apple" />
            </span>
            Apple
          </MDBNavbarBrand>
          <MDBNavbarToggler
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
          >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink className="nav-link">
                <NavLink to="/" className="text-white">
                  Home
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="nav-link">
                <NavLink to="/addUser" className="text-white">
                  Add User
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="nav-link">
                <NavLink to="/about" className="text-white">
                  About
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header
