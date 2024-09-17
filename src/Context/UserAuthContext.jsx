import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from "../Utils/firebaseConfig";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import LoaderSc from '../Components/LoaderSc';

const UserAuthContext = createContext();

export const useAuth = () => useContext(UserAuthContext);

export const UserAuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Start with loading state

    // Sign in function
    const signIn = async (email, password) => {
        try {
            setLoading(true);
            const result = await signInWithEmailAndPassword(auth, email, password);
            setUser(result.user);
            localStorage.setItem("user", JSON.stringify(result.user));
        } catch (error) {
            throw new Error("Invalid email or password. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Sign out function
    const logout = async () => {
        try {
            setLoading(true);
            await signOut(auth);
            setUser(null);
            localStorage.removeItem("user");
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return (
        <UserAuthContext.Provider value={{ user, signIn, logout, loading }}>
            {loading ? <LoaderSc /> : children}
        </UserAuthContext.Provider>
    );
};
