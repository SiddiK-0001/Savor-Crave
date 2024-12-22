import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div>
                <Navbar></Navbar>
                
            </div>

            <div className='flex-grow'>
                <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;