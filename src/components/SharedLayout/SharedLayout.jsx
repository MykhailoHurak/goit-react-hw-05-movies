import { NavLink, Outlet } from "react-router-dom";

import './SharedLayout.css';

export const SharedLayout = () => {
    return (
        <>
            <nav className='NavBar'>
                <NavLink className='NavLink' to="/">
                    Home
                </NavLink>
                <NavLink className='NavLink' to="/movies">
                    Movies
                </NavLink>
            </nav>
            
            <main>
                <Outlet />
            </main>
        </>
    );
};