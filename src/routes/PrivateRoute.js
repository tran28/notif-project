import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("userToken");

    if (token) {
        const { exp } = jwtDecode(token); // Decode token to get exp time
        const currentTime = Date.now() / 1000; // Convert to seconds

        // Check if token has expired
        if (exp < currentTime) {
            // Token has expired, clear it from local storage and redirect to login
            localStorage.removeItem("userToken");
            return <Navigate to="/auth" />;
        }

        // Token is valid and not expired, render the protected component
        return children;
    }

    // No token found, redirect to login
    return <Navigate to="/auth" />;
};

export default PrivateRoute;
