import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from '../../api/api';

import './PageHome.css';

const PageHome = () => {
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending()
      .then(data => {
        setMovieList(data);
      })
      .catch(err => {
        throw err;
      });
  }, []);

  return (
    <div className='HomeContainer'>
      <h1>Trending today</h1>
      <ul>
        {movieList.map(movie => {
        const { id, title } = movie;
        return (
          <li key={id}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              <h2 className="Title">{title}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
    </div>
  );
};

export default PageHome;