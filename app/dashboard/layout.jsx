import React from 'react'
import Sidebar from '../components/dashboard/sidebar/Sidebar'
import Navbar from '../components/dashboard/navbar/Navbar'

const layout = ({children}) => {
  return (
    <div className='flex p-4'>
    <Sidebar />
    <div className='w-full'>
    <Navbar />
    <div className='w-full h-auto pl-7 py-4'>
    {children}
    </div>
    </div>
    </div>
  )
}

export default layout