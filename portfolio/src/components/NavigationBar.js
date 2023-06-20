import { Paper } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { LinkContainer } from 'react-router-bootstrap';

export function NavigationBar() {
  return (
    <>


      <Paper elevation={6}>
        <Container>
          <Row>
            <Col lg={2} sm={12}></Col>
            <Col lg={7} sm={12}>
              <Navbar collapseOnSelect expand="lg" variant="dark">


                <Navbar.Brand href="#home" style={{
                  fontSize: 25,
                  fontFamily: 'monospace',
                  color: 'black'
                }}
                  className='texthead'
                ><h4 className='pe-5 headBrand'>Sumit</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor: 'black' }} />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto d-flex justify-content-center">
                    {/* <Nav.Link href="#features">Features</Nav.Link>
         <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.2">
             Another action
           </NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="#action/3.4">
             Separated link
           </NavDropdown.Item>
         </NavDropdown> */}
                  </Nav>
                  <Nav>
                    <LinkContainer to='/' style={{ color: 'black' }}>
                      <Nav.Link
                        style={{
                          fontSize: 25,
                          fontFamily: 'monospace',
                          color: 'black'
                        }}
                        className='textStyle'
                      ><h5 className='ms-2 heading'>Home</h5></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/about' style={{ color: 'black' }}>
                      <Nav.Link
                        style={{
                          fontSize: 25,
                          fontFamily: 'monospace',
                          color: 'black'
                        }}
                        className='textStyle'
                      ><h5 className='ms-2 heading'>About</h5></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/skills' style={{ color: 'black' }}>
                      <Nav.Link
                        style={{
                          fontSize: 25,
                          fontFamily: 'monospace',
                          color: 'black'
                        }}
                        className='textStyle'
                      ><h5 className='ms-2 heading'>Skills</h5></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/projects' style={{ color: 'black' }}>
                      <Nav.Link
                        style={{
                          fontSize: 25,
                          fontFamily: 'monospace',
                          color: 'black'
                        }}
                        className='textStyle'
                      ><h5 className='ms-2 heading'>Projects</h5></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/services' style={{ color: 'black' }}>
                      <Nav.Link
                        style={{
                          fontSize: 25,
                          fontFamily: 'monospace',
                          color: 'black'
                        }}
                        className='textStyle'
                      ><h5 className='ms-2 heading'>Hire Me</h5></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/contact' style={{ color: 'black' }}>
                      <Nav.Link
                        style={{
                          fontSize: 25,
                          fontFamily: 'monospace',
                          color: 'black'
                        }}
                        className='textStyle'
                      ><h5 className='ms-2 heading'>Contact</h5></Nav.Link>
                    </LinkContainer>


                  </Nav>
                </Navbar.Collapse>

              </Navbar>

            </Col>

            {/* <Col lg={4}></Col> */}
          </Row>
        </Container>

      </Paper>


    </>
  );
}

