"use client"
import { Button } from "@/components/ui/button"
import {auth} from '../../../firebase'
import firebase from 'firebase/compat/app'
import {useRouter} from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const SignInG = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/gmail.send');
    try {
      let response = await auth.signInWithPopup(provider);
      console.log(response.user, "user rres")
      if(response){
        router.push('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-2 ">
      <div className="mx-auto w-full max-w-md space-y-4 rounded-lg bg-gray p-6 shadow-lg ">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Welcome back!</h1>
          <p className="mt-2 text-gray-500 ">Sign in to your account to continue.</p>
        </div>
        <Button
          onClick={SignInG}
          className="flex w-full items-center justify-center gap-2 rounded-md border-gray-200 px-4 py-2 text-sm font-medium shadow-sm transition-colors bg-gray-100 text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50     "
          variant="outline"
        >
          <ChromeIcon className="h-5 w-5" />
          Sign in with Google
        </Button>
      </div>
    </div>
  )
}

function ChromeIcon({className}: {className: string}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}