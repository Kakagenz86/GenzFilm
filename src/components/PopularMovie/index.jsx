import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Image} from 'react-bootstrap';
import './style.css'

const PopularMovie = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [paging, setPaging] = useState ({
        currentPage: 1,
        totalPages: 1, 
    })

    useEffect(() => {
        handleMovie();
    }, [paging.currentPage]);

    const handleMovie = () => {
        const apiKey = 'f136764a7005bddc0cbb15a16ad3672a';
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paging.currentPage}`;

        axios
            .get(apiUrl)
            .then((res) => {
                console.log(res);
                setMovies(res.data.results);
                setPaging({
                    ...paging,
                    totalPages: res.data.total_pages,
                });
            })
            .catch((err) => console.log(err));
    };

    const handleSearchMovie = () => {
        const apiKey = 'f136764a7005bddc0cbb15a16ad3672a';
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;

        axios
            .get(apiUrl)
            .then((res) => {
                // console.log(res);
                setMovies(res.data.results);
            })
            .catch((err) => console.log(err));
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSubmit = () => {
        handleSearchMovie()
    }

    const handleBack = () => {
        setPaging({
            ...paging,
            currentPage: paging.currentPage - 1,
        });
    };

    const handleNext = () => {
        setPaging({
            ...paging,
            currentPage: paging.currentPage + 1,
        });
    };

    return (
        <Container id='popular'>
            <br />
            <br />
            <h1 className='text-white fw-semibold mb-3'>Movie Popular</h1>
            <input onChange={handleSearch} className='p-1 m-2' type="text" placeholder='Search Film...' />
            <button onClick={handleSubmit} className='p-1'>Submit</button>
            <Row>
                {movies.map((movie) => (
                    <Col lg={2} sm={4} xs={4} key={movie.id}>
                        <Card className='popular-card'>
                            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='Card image' className='popular-img' />
                                <div className='popular-text'>
                                    <Card.Title className='popular-title'>{movie.title}</Card.Title>
                                    {/* <Card.Text>{movie.overview}</Card.Text>
                                    <div className='popular-text'>
                                        <Card.Text>Rilis: {movie.release_date}</Card.Text>
                                        <Card.Text>Popularitas: {movie.popularity}</Card.Text>
                                        <Card.Text>Vote: {movie.vote_count}</Card.Text>
                                    </div> */}
                                </div>
                        </Card>
                    </Col>
                ))}
            </Row>
                    <h1 className='text-white d-flex justify-content-center'>Page {paging.currentPage}</h1>
                <div className='popular-btn'>
                    <button className='popular-back' onClick={handleBack} disabled={paging.currentPage <= 1}>
                    Back
                    </button>
                    <button className='popular-next' onClick={handleNext} disabled={paging.currentPage >= paging.totalPages}>
                    Next
                    </button>
                </div> 
        </Container>
    );
};

export default PopularMovie
