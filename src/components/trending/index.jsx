import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Image, CardText } from 'react-bootstrap';
import './style.css'

const Trending = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        handleMovie();
    }, []);

    const handleMovie = () => {
        const apiKey = 'f136764a7005bddc0cbb15a16ad3672a';
        const apiUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;

        axios
            .get(apiUrl)
            .then((res) => {
                console.log(res);
                setMovies(res.data.results);
            })
            .catch((err) => console.log(err));
    };

    return (
        <Container id='trending'>
            <br />
            <br />
            <h1 className='text-white fw-semibold mb-3'>TRENDING MOVIES</h1>
            <Row>
                {movies.map((movie) => (
                    <Col md={4} key={movie.id}>
                        <Card className='trending-card'>
                            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='Card image' className='trending-img' />
                            <div className='bg-dark'>
                                <div className='p-2 text-white'>
                                    <Card.Title className='text-center'>{movie.title || movie.name}</Card.Title>
                                    <Card.Text>{movie.overview}</Card.Text>
                                    <div className='trending-text'>
                                        <Card.Text>Rilis: {movie.release_date}</Card.Text>
                                        <Card.Text>Popularitas: {movie.popularity}</Card.Text>
                                        <Card.Text>Vote: {movie.vote_count}</Card.Text>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Trending;
