import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

// Create context using createContext hook & export context
export const AuthContext = createContext();

// Create auth using getAuth hook with the app
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    // Declare state for user
    const [user, setUser] = useState(null);
    // Declare state for loading
    const [loading, setLoading] = useState(true);

    // Declare the createUser function to create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Declare the signIn function to sign-in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Declare the updateUser function to update the user
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }
    // Declare the logOut function to log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Set observer using useEffect (params: callback function & dependency) & unsubscribe the observer for user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
            // Set setLoading false when the user is logged in
            setLoading(false);
        });
        // Return unsubscribe using arrow/callback function
        return () => unsubscribe();
    }, [])

    // Declare to store context info that is shared by the provider
    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        loading
    }

    return (
        // Declare context provider to share context info
        <AuthContext.Provider value={authInfo}>
            {/* Set param to find provider info using Context */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;