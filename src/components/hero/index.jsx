import React from 'react'
import './style.css'
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
        return (
            <div className='hero'>
                <Container className='text-white text-center d-flex justify-content-center align-item-center'>
                    <Row>
                        <Col>
                        <div className='hero-title'>NONTON GRATIS</div>
                        <div className='hero-title'>GAK PAKE KARCIS</div>
                        <div className="hero-btn mt-4">
                            <Button variant='dark' href='#trending'>Lihat Semua List</Button>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
    );
}

export default Hero;