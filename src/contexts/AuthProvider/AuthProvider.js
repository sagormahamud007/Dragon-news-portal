import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    //Google sign In
    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    //updateProfile
    const updateUserProfile = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }
    //onAuthChange
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('this site the user', currentUser);
            if (currentUser == null || currentUser.emailVerified) {
                setUser(currentUser)
                setLoading(false)
            }

        })
        return () => unSubscribe;
    }, [])

    //logOut
    const logOut = () => {
        return signOut(auth)
    }
    //LoginUser
    const LoginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Sign in user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    const authInfo = {
        user,
        providerLogin,
        logOut,
        LoginUser,
        createUser,
        updateUserProfile,
        loading,
        setLoading,
        verifyEmail
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;