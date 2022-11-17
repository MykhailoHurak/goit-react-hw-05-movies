import { lazy } from "react";
// import React, { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";

import SharedLayout from "./SharedLayout/SharedLayout";
// import { PageHome } from '../pages/PageHome/PageHome';
// import { PageMovies } from '../pages/PageMovies/PageMovies';

import PageMovieDetails from '../pages/PageMovieDetails/PageMovieDetails';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

// import React, { Suspense, lazy } from 'react';
// import { lazy } from "react";

// const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const PageHome = lazy(() => import('../pages/PageHome/PageHome'));
const PageMovies = lazy(() => import('../pages/PageMovies/PageMovies'));

// const PageMovieDetails = lazy(() => import('../pages/PageMovieDetails/PageMovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>   
        {/* <Suspense fallback={<div>Loading page...</div>}> */}
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
      {/* </Suspense> */}
    </div>
  );
};