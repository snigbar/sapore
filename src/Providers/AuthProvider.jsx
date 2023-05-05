import React, { createContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase';



export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
   
// create user
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // create login
    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    // profle pic and name
    const updateUser = (name,photoUrl) =>{

            updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
            }).then((res) => {
            // Profile updated!
              
            // ...
            }).catch((error) => {
            // An error occurred
            // ...
            console.log(error)
            });
    }

// monitoring user

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false)
        })

        return () => {
            unsubscribe();
        }
    }, [])
  
    const logOut =() =>{
        return signOut(auth);
    }

    // exporting
    const authInfo = {
        user,
        createUser,
        logIn,
        updateUser,
        logOut,
        loading,
        setUser, 
        auth,
        setLoading
    };

    console.log(user)

  return (
    <AuthContext.Provider value={authInfo}>  
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;