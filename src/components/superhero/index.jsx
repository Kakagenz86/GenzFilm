import React from 'react'
import './style.css'
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import antman from '../../assets/images/superhero/antman.jpg'
import batman from '../../assets/images/superhero/batman.jpeg'
import spiderman from '../../assets/images/superhero/spiderman.jpg'
import wolverine from '../../assets/images/superhero/wolverine.jpg'
import hulk from '../../assets/images/superhero/hulk.jpeg'
import thor from '../../assets/images/superhero/thor.jpeg'

const SuperHero = () => {
    return (
        <Container id='superhero'>
        <br />
        <br />
        <h1 className='text-white fw-semibold mb-3'>SUPER HERO</h1>
        <Row>
            <Col md={4}>
                <Card className=" superhero-card">
                <Image src={antman} alt="Card image" className='superhero-img'/>
                <div className="bg-dark">
                    <div className='p-2 text-white'>
                        <Card.Title className='text-center'>ANT-MAN</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
            </Col>
            <Col md={4}>
                <Card className=" superhero-card">
                <Image src={batman} alt="Card image" className='superhero-img'/>
                <div className="bg-dark">
                    <div className='p-2 text-white'>
                        <Card.Title className='text-center'>BATMAN</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
            </Col>
            <Col md={4}>
                <Card className=" superhero-card">
                <Image src={spiderman} alt="Card image" className='superhero-img'/>
                <div className="bg-dark">
                    <div className='p-2 text-white'>
                        <Card.Title className='text-center'>SPIDERMAN</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
            </Col>
            <Col md={4}>
                <Card className=" superhero-card">
                <Image src={wolverine} alt="Card image" className='superhero-img'/>
                <div className="bg-dark">
                    <div className='p-2 text-white'>
                        <Card.Title className='text-center'>WOLVERINE</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
            </Col>
            <Col md={4}>
                <Card className=" superhero-card">
                <Image src={hulk} alt="Card image" className='superhero-img'/>
                <div className="bg-dark">
                    <div className='p-2 text-white'>
                        <Card.Title className='text-center'>HULK</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
            </Col>
            <Col md={4}>
                <Card className=" superhero-card">
                <Image src={thor} alt="Card image" className='superhero-img'/>
                <div className="bg-dark">
                    <div className='p-2 text-white'>
                        <Card.Title className='text-center'>THOR</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
            </Col>
        </Row>
    </Container>
    );
}

export default SuperHero;