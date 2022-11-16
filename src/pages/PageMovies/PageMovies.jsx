import qs from 'query-string';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { getSearchMovies } from '../../api/api';
import './PageMovies.css';

export const PageMovies = () => {

    const [input, setInput] = useState('');
    const [movieList, setMovieList] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const search = qs.parse(location.search);
    const { query } = search;

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (!input) return;
        navigate({ pathname: '/movies', search: '?query=' + input });
    };

    useEffect(() => {
        query &&
        getSearchMovies(query).then(data => {
            setMovieList(data);
        });
    }, [query]);

    return (
        <>
            <form
                className='PageMovies_Form'
                onSubmit={handleSubmit}
                style={{
                    paddingBottom: '22px',
                }}
            >
                <button
                    className='PageMovies_Button' 
                    type="submit">
                        Search
                </button>
                <input
                    className='PageMovies_Input'
                    onChange={handleChange} 
                    type="text" 
                    value={input} />
            </form>
            {movieList.length > 0 && 
            <ul>
                {movieList.map(movie => {
                    const { id, title } = movie;
                    return (
                        <li key={id}>
                            <Link
                                className="link"
                                to={`/movies/${id}`}
                                state={{ from: location }}
                            >
                                <h2>{title}</h2>
                            </Link>
                        </li>
                    );
                })}
            </ul>}
        </>
    );
};