import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(Authcontext)

    const location = useLocation(); 
    

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    
    if (user) {
        return children;
    }
    else{
        return (
            <Navigate to="/login" state={location?.pathname}></Navigate>
            
        )
    }
   
};

export default PrivateRoute;