import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return  <p className="text-red">loading</p>
    }
 
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to='/login'></Navigate>
}

export default PrivateRoute