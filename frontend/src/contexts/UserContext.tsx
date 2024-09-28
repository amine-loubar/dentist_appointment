// UserContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useUserData } from '../hooks/useUserData'; // Adjust the import path
import { User } from "../types/UserType"

interface UserContextType {
    user: User | null;
    isAuthenticated: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode<User>(token);
                const fetchUserData = async () => {
                    try {
                        const userData = await useUserData(decoded);
                        setUser(userData);
                        setIsAuthenticated(true);
                    } catch (error) {
                        console.error('Failed to fetch user data:', error);
                        setUser(null);
                        setIsAuthenticated(false);
                    }
                };

                fetchUserData(); // Call the async function
            } catch (error) {
                console.error('Failed to decode token:', error);
                setUser(null);
                setIsAuthenticated(false);
            }
        } else {
            setUser(null);
            setIsAuthenticated(false);
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, isAuthenticated }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the UserContext
export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
