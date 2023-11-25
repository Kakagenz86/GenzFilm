import React from 'react'
import { Navbar, Container, Nav, NavbarBrand } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant='dark'>
                <Container>
                    <NavbarBrand href='/' className='fw-bold'>GENZFILM</NavbarBrand>
                    <Nav>
                        <Nav.Link href='#trending' className='fw-semibold'>TRENDING</Nav.Link>
                        <Nav.Link href='#superhero' className='fw-semibold'>SUPERHERO</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar
