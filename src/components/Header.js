import { MDBContainer, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler } from 'mdb-react-ui-kit'
import React, { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>
      <MDBNavbar expand="lg" light bgColor="primary" >
        <MDBContainer>
          <MDBNavbarBrand className="text-white">
            <span style={{marginRight: "10px"}} >
              <MDBIcon fab icon="apple" />
            </span>
            Apple
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls='navbar'
            aria-expanded='false'
            aria-label='Toggle navigation'
            className='text-white'
          >
            <MDBIcon fas icon='bar' />
            
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>
    </Fragment>
  )
}

export default Header
