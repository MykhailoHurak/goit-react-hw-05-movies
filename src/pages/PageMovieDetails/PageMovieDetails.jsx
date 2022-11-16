import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../../api/api';

import './PageMovieDetails.css';

export const PageMovieDetails = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const [error, setErr] = useState('');
    const id = parseInt(location.pathname.match(/\d+/));
    const imgUrl = 'https://image.tmdb.org/t/p/w400'; // file not found

    useEffect(() => {
        getMovieDetails(id)
            .then(setMovie)
            .catch(error => {
                console.log(error);
                setErr(error);
                throw error;
            });
    }, [id]);
  
    const locationGoBack = location.state?.from ?? '/';
    const goBack = () => {
        navigate(locationGoBack);
    };

    const { poster_path, title, vote_average, overview, genres } = movie;
  
    return (
        <>
            {error ? (
                <p>Wrong URL</p>
            ) : (
                    <>
                        <button
                            className='PageMovieDetails_ButtonGoBack' 
                            onClick={goBack}
                        > 
                            Go back
                        </button>

                        <div className='PageMovieDetails_Box'>
                            <img src={poster_path && imgUrl + poster_path} alt="" width="20%" />
                            <div className='PageMovieDetails_BoxText'>
                                <h2>{title}</h2>
                                <p>User Score: {vote_average}</p>

                                <h3>Overvies</h3>
                                <p>{overview}</p>

                                <h3>Genres</h3>
                                <ul>
                                    {genres?.map(genre => {
                                        const { id, name } = genre;
                                        return <li key={id}>{name}</li>;
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className='PageMovieDetails_BoxAdditional'>
                            <span className='PageMovieDetails_AdditionalText'>
                                Additional informaintion
                            </span>
                            <Link
                            className='PageMovieDetails_AdditionalLink'
                            to={`/movies/${movieId}/cast`}
                            state={{ from: location.state?.from ?? '/' }}
                            >
                                Cast
                            </Link>
                            <Link
                            className='PageMovieDetails_AdditionalLink'
                            to={`/movies/${movieId}/reviews`}
                            state={{ from: location.state?.from ?? '/' }}
                            >
                                Reviews
                            </Link>
                        </div>
                        <Outlet />
                    </>
            )}
        </>
    );
};