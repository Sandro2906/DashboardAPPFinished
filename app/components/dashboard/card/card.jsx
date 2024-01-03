import React from 'react'
import { IoPeopleCircleOutline } from "react-icons/io5";

const Card = () => {
  return (
      <div className='w-full h-auto p-3 bg-purple-900 rounded-lg flex text-white hover:bg-purple-600'>
      <div className='px-3 py-2'>
      <IoPeopleCircleOutline />
      </div>
      <div className='flex flex-col justify-between space-y-3'>
        <h1 className='text-lg'>Total users</h1>
        <h1 className='text-2xl'>10.000</h1>
        <h1 className='text-sm'><a className='text-green-400'>+12% </a>mroe than previous week</h1>
        </div>
        </div>
  )
}

export default Card