import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    const location = useLocation();
    const token = sessionStorage.getItem('token');

    if (!token) {
        // Redirigir a login si no hay token
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children;
}
