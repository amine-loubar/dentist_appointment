// src/auth.ts
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
    exp: number;
    email?: string; // Adjust based on your token structure
    // Add other fields if needed
}

// Helper function to check if the user is authenticated
export const useAuth = (): boolean => {
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
        const decodedToken = jwtDecode<DecodedToken>(token);
        const currentTime = Date.now() / 1000; // Current time in seconds
        return decodedToken.exp > currentTime; // Token is valid if not expired
    } catch (error) {
        return false;
    }
};
