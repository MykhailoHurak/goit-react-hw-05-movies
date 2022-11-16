import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./SharedLayout/SharedLayout";
import { PageHome } from '../pages/PageHome/PageHome';
import { PageMovies } from '../pages/PageMovies/PageMovies';

export const App = () => {
  return (
    <div>   
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PageHome />} />
          <Route path="movies" element={<PageMovies />} />
        </Route>
      </Routes>
    </div>
  );
};