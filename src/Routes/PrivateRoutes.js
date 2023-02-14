import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div>loading....</div>
    }
    if(user?.uid){
        return children;
    }
    else{
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoutes;