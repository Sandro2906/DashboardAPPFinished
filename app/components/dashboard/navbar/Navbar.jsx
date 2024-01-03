'use client'
import React from 'react'
import Logout from '../logout/Logut';
import { useUser } from '@auth0/nextjs-auth0/client';

const Navbar = () => {

  const { user, error, isLoading } = useUser();

  return (
    <div className='pl-7 w-full'>
    <div className='w-full h-[70px] bg-purple-900 text-white rounded-lg  flex justify-between items-center p-4'>
    <h1>Dashboard</h1>
    <div className='flex space-x-3 justify-center items-center'>
    {
      user ? (
        <Logout />
      ) : (
        <div></div>
      )
    }
   
    </div>
    </div>
    </div>
  )
}

export default Navbar