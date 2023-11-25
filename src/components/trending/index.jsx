import React from 'react'
import './style.css'
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import flash from '../../assets/images/trending/flash.jpg'
import blackwidow from '../../assets/images/trending/blackwidow.jpg'
import captainamerica from '../../assets/images/trending/captainamerica.jpg'
import ironman from '../../assets/images/trending/ironman.jpg'
import joker from '../../assets/images/trending/joker.jpg'
import robinhood from '../../assets/images/trending/robinhood.jpg'

const Trending = () => {
    return (
        <Container id='trending'>
            <br />
            <br />
            <h1 className='text-white fw-semibold mb-3'>TRENDING MOVIES</h1>
            <Row>
                <Col md={4}>
                    <Card className=" trending-card">
                    <Image src={flash} alt="Card image" className='trending-img'/>
                    <div className="bg-dark">
                        <div className='p-2 text-white'>
                            <Card.Title className='text-center'>FLASH</Card.Title>
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
                    <Card className=" trending-card">
                    <Image src={blackwidow} alt="Card image" className='trending-img'/>
                    <div className="bg-dark">
                        <div className='p-2 text-white'>
                            <Card.Title className='text-center'>BLACK WIDOW</Card.Title>
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
                    <Card className=" trending-card">
                    <Image src={captainamerica} alt="Card image" className='trending-img'/>
                    <div className="bg-dark">
                        <div className='p-2 text-white'>
                            <Card.Title className='text-center'>CAPTAIN AMERICA</Card.Title>
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
                    <Card className=" trending-card">
                    <Image src={ironman} alt="Card image" className='trending-img'/>
                    <div className="bg-dark">
                        <div className='p-2 text-white'>
                            <Card.Title className='text-center'>IRON MAN</Card.Title>
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
                    <Card className=" trending-card">
                    <Image src={joker} alt="Card image" className='trending-img'/>
                    <div className="bg-dark">
                        <div className='p-2 text-white'>
                            <Card.Title className='text-center'>JOKER</Card.Title>
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
                    <Card className=" trending-card">
                    <Image src={robinhood} alt="Card image" className='trending-img'/>
                    <div className="bg-dark">
                        <div className='p-2 text-white'>
                            <Card.Title className='text-center'>ROBIN HOOD</Card.Title>
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

export default Trending;