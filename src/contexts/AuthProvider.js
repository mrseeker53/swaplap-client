import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';

// Create context using createContext hook & export context
export const AuthContext = createContext();

// Create auth using getAuth hook with the app
const auth = getAuth(app);


const AuthProvider = ({ children }) => {


    // Declare to store context info that is shared by the provider
    const authInfo = {

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