import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from "react";
import app from '../firebase/firebase.init';

const auth = getAuth(app);



export const AuthProvider = createContext();
const UseContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //EMAIL PASS SIGNUP!
    const signUpUsingEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //Update User Profile
    const updateUserProfile = (displayName, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {displayName, photoURL});
    }

    //Email Password Sign In
    const signInByEmailPass = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    //Google Login
    const popUpSignIn = (provider) => {
        return signInWithPopup(auth,provider);
    }

    //Log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
             unSubscribe();
        }
    }
    ,[])
    

    const authValue = {user, signUpUsingEmail, updateUserProfile, logOut, signInByEmailPass, loading, popUpSignIn}
    return (
        <AuthProvider.Provider value={authValue}>
            {children}
        </AuthProvider.Provider>
            
    );
};

export default UseContext;