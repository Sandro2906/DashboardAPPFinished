import React from 'react'
import Image from 'next/image'
import ProfileClient from '../userinfo/ProfileClient'

const User = () => {
  return (
    <div className='w-full h-auto justify-center flex items-center p-4 '>
        <ProfileClient />
    </div>
  )
}

export default User