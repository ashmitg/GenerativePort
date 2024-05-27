"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { useGlobalAuth } from '@/lib/context';

export const useAuth = () => {
    const router = useRouter();
    const authContext = useGlobalAuth();

    const email = authContext?.email;
    const displayname = authContext?.displayname;
    const photoURL = authContext?.photoURL;
    const loading = authContext?.loading;

    useEffect(() => {

        if (!loading && email!=process.env.NEXT_PUBLIC_EMAIL) {
            // Redirect to the signin page if user is not signed in
            router.push('/signin');
        }
    }, [loading, email, router]);

    return { email, displayname, photoURL, loading };
};
