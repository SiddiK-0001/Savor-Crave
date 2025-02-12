import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';


export const Authcontext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loginEmail, setLoginEmail] = useState('');

  


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            
            setUser(currentUser);

            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('https://assignment-11-server-six-cyan.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        // console.log(res.data);
                        setLoading(false);
                    })
            }
            
            else {
                axios.post('https://assignment-11-server-six-cyan.vercel.app/logout', {}, {
                    withCredentials: true
                })
                    .then(res => {
                        // console.log(res.data);
                        setLoading(false);
                    })
            }

        });
        return () => {

            unsubscribe();
        };
    }, []);





    const info = {

        user,
        loading,
        setLoading,
        createUser,
        loginUser,
        signOutUser,
        signInWithGoogle,
        loginEmail,
        setLoginEmail
    }

    return (
        <Authcontext.Provider value={info}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;