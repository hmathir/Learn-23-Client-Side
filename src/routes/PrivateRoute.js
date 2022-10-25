import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../context/UseContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProvider);
    const location = useLocation();
    if (loading) {
        return <div className='flex items-center h-screen justify-center'>
            <button className="btn loading">loading</button>
        </div>
    }
    if (user?.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;