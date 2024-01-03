'use client'
import Link from "next/link";
import Login from "./login/page";
import { useUser } from '@auth0/nextjs-auth0/client';
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const { user, error, isLoading } = useUser();
  const router = useRouter()
  useEffect(()=>{
    
    if(user){
      onload.router.push('/dashboard')
    }
  },[])

  return (
  <div className="w-full h-screen flex flex-col text-white text-2xl justify-center items-center">
 
  {
    user ? (
      <Link className="w-[200px] h-auto p-5 bg-purple-500 rounded-full flex justify-center items-center" href='/dashboard'>
      <h1 className="text-4xl text-white">GO TO APP</h1>
      </Link>
    ) : (
      <div className="flex flex-col justify-center items-center bg-purple-700 p-10 rounded-lg sha">
      <h1 className="text-7xl">W E L C O M E</h1>
      <h2 className="pb-5">If you want to use our aplication, first you have to login!</h2>
      <Login />

      </div>
    )
  }
   
   
  </div>
  )
}
