import React, { useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext ();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = profile =>{
        return updateUserProfile(auth.currentUser, profile);
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSingIn = Provider =>{
        return signInWithPopup(auth, Provider);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        }
    })

    const authInfo = {user, createUser, updateUserProfile, signIn, logOut, googleSingIn};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;