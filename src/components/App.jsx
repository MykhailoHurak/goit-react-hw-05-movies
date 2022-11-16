import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./SharedLayout/SharedLayout";
import { PageHome } from '../pages/PageHome/PageHome';
import { PageMovies } from '../pages/PageMovies/PageMovies';

import { PageMovieDetails } from '../pages/PageMovieDetails/PageMovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>   
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PageHome />} />
          <Route path="movies" element={<PageMovies />} />
          
          <Route path="movies/:movieId" element={<PageMovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};