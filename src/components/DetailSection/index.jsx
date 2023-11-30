import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Image} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from '../../components/navbar';
import './style.css'

const DetailSection = () => {
    const [movies, setMovies] = useState([]);
    const [videos, setVideos] = useState([]);
    const param = useParams();

    useEffect(() => {
        handleDetailMovie();
        handleVideo();
    }, [param.id]);

    const handleDetailMovie = () => {
        const apiKey = 'f136764a7005bddc0cbb15a16ad3672a';
        const apiUrl = `https://api.themoviedb.org/3/movie/${param.id}?api_key=${apiKey}`;

        axios
        .get(apiUrl)
        .then((res) => {
            console.log(res);
            setMovies(res.data);
        })
        .catch((err) => console.log(err));
    };

    const handleVideo = () => {
        const apiKey = 'f136764a7005bddc0cbb15a16ad3672a';
        const apiUrl = `https://api.themoviedb.org/3/movie/${param.id}/videos?api_key=${apiKey}`;

        axios
        .get(apiUrl)
        .then((res) => {
            console.log(res);
            setVideos(res.data.results);
        })
        .catch((err) => console.log(err));
    };

    return (
        <div className='detail-nav'>
            <div>
                <NavigationBar />
            </div>
            <Container>
                <div className="detail-wrapper-video">
                    {videos.map((video) => (
                        <div key={video.key}>
                            <iframe
                                title={video.name}
                                className='detail-video'
                                src={`https://www.youtube.com/embed/${video.key}`}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen>
                            </iframe>
                        </div>
                        ))}
                </div>
                <div className="detail">
                <Image src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt='Card image' className='detail-img' />
                    <div className="detail-text">
                        <Card.Text>{movies.overview}</Card.Text>
                        <Card.Text>Rilis: {movies.release_date}</Card.Text>
                        <Card.Text>Vote: {movies.status}</Card.Text>
                        <Card.Text>Popularitas: {movies.popularity}</Card.Text>
                        <Card.Text>Vote: {movies.vote_count}</Card.Text>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DetailSection;
