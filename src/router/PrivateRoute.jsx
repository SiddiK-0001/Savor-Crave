import React, { useContext } from 'react';

import { Navigate, NavLink, useLocation } from 'react-router-dom';
import { Authcontext } from '../provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(Authcontext)

    const location = useLocation(); 
    

    if(loading){
        return (
            <div className='text-center'>
                 <span className="loading loading-spinner loading-lg "></span>
            </div>
           
        )
    }
    
    if (user) {
        return children;
    }
    else{
        return (
            <Navigate to="/login" state={location?.pathname}></Navigate>
            // <NavLink  to="/login" ></NavLink> this doesnt work
            
        )
    }
   
};

export default PrivateRoute;