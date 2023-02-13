import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../../Firebase/firebase.init';

export const authContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // new created user 
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login user 
    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // keep up created user on state
    useEffect( ()=>{
      const unsubcribe =   onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        });

        return ()=>{
            return unsubcribe();
        }
    } ,[])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser
       
    }


    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
