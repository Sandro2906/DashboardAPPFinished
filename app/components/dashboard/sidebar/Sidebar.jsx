import React from 'react'
import User from './User'
import Lista from './Lista'

const Sidebar = () => {
  return (
    <div className='w-[350px] min-h-screen bg-purple-900 rounded-2xl p-4  text-white'>
      <User />
      <Lista />
    </div>
  )
}

export default Sidebar