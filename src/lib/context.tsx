"use client"
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { CreateUser } from '@/actions/user/action'
import { Dispatch, SetStateAction } from 'react';
import { auth } from '../firebase'

interface IAuthContext {
    email: string;
    displayname: string;
    photoURL: string;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    uid: string;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthGlobalProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState<boolean>(true);

    const [user, setUser] = useState<any | null>(null);

    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged((user) => {

            if (user && user.email === process.env.NEXT_PUBLIC_EMAIL) {
                setUser(user);
                CreateUser(user.uid);
            } else {
                auth.signOut();
                setUser(null);
            }
            setLoading(false);
        });

        // Cleanup function
        return () => unsubscribe();

    }, []);

    const uid = user?.uid;
    const email = user ? user.email : null;
    const displayname = user ? user.displayName : null;
    const photoURL = user ? user.photoURL : null;
    return (
        <AuthContext.Provider value={{ email, displayname, photoURL, loading, setLoading, uid }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useGlobalAuth = () => {


    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useGlobalAuth must be used within a AuthGlobalProvider')
    }

    return context;

}