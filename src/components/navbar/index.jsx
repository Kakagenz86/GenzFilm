import React from 'react'
import { Navbar, Container, Nav, NavbarBrand } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant='dark'>
                <Container>
                    <NavbarBrand href='/' className='fw-bold'>GENZFILM</NavbarBrand>
                    <Nav>
                        <Nav.Link href='#popular' className='fw-semibold'>POPULAR</Nav.Link>
                        <Nav.Link href='#superhero' className='fw-semibold'>...</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar
