import React, { useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext ();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const updateUserProfile = (profile) =>{
        return updateProfile (auth.currentUser, profile);
    }

    const googleSingIn = Provider =>{
        setLoading(true);
        return signInWithPopup(auth, Provider);
    }

    const githubSingIn = Provider => {
        setLoading(true);
        return signInWithPopup(auth, Provider);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    })

    const authInfo = {
        user, 
        loading, 
        createUser, 
        signIn, 
        logOut, 
        updateUserProfile, 
        googleSingIn,
        githubSingIn 
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;