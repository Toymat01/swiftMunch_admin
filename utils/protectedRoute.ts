import React, { ReactNode } from 'react';
import { useAuth } from './auth';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps): JSX.Element | null => {
    const isAuthenticated = useAuth();

    if (!isAuthenticated) {
        return null; // Return null if user is not authenticated
    }

    console.log(isAuthenticated);
    return null;
    /*  return <div>{children}</div>; // Return the children directly */
};

export default ProtectedRoute;
