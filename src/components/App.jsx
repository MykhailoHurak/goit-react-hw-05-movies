import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./SharedLayout/SharedLayout";
import { PageHome } from '../pages/PageHome/PageHome';
import { PageMovies } from '../pages/PageMovies/PageMovies';
import { PageMovieDetails } from '../pages/PageMovieDetails/PageMovieDetails';

export const App = () => {
  return (
    <div>   
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PageHome />} />
          <Route path="movies" element={<PageMovies />} />
          <Route path="movies/:movieId" element={<PageMovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
};