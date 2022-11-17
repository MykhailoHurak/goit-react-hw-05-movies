import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";



import './SharedLayout.css';

const SharedLayout = () => {
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
                {/* <Outlet /> */}
                <Suspense fallback={<div>Loading page...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};

export default SharedLayout;