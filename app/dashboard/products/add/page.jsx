'use client'
import React from 'react'
import { useState } from 'react';

const AddProduct = () => {

  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    price: '',
    stock: '',
    color:'',
    size:''
  });

  const handleSubmit = async (e) => {

    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault(); 
    window.location.reload();
    try {
      const res = await fetch('/api/formproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });
      
  
    } catch (error) {
      console.error('Fetch error:', error); 
    }
  };

  return (
    <div>
    <form onSubmit={handleClick} className='flex flex-wrap justify-between bg-purple-900 text-white p-4 rounded-lg'>
    <input value={formData.title} onChange={handleSubmit} name='title' className=' my-3 p-4 w-[45%] rounded-md border-2 border-purple-600 bg-blue-950' type='text' placeholder='title'/>
    <input value={formData.price} onChange={handleSubmit} placeholder='price' type='number' className=' my-3 p-4 w-[45%] rounded-md border-2 border-purple-600 bg-blue-950' name='price' />
    <input value={formData.stock} onChange={handleSubmit} placeholder='stock' type='number' className=' my-3 p-4 w-[45%] rounded-md border-2 border-purple-600 bg-blue-950' name='stock' />
    <input value={formData.color} onChange={handleSubmit} placeholder='color' type='text' className=' my-3 p-4 w-[45%] rounded-md border-2 border-purple-600 bg-blue-950' name='color' />
    <input value={formData.size} onChange={handleSubmit} placeholder='size' type='text' className=' my-3 p-4 w-[45%] rounded-md border-2 border-purple-600 bg-blue-950' name='size' />
    <div className='flex flex-col w-full justify-center items-center '>
    <textarea value={formData.desc} onChange={handleSubmit} id='desc' name='desc' className='p-4 w-[100%] rounded-md border-2 border-purple-600 bg-blue-950 my-3' rows={10} placeholder='Description'></textarea>
    <button type='submit' className='p-4 mt-3 rounded-md bg-sky-500 w-full text-white'>Submit</button>
    </div>
    </form>
</div>
  )
}

export default AddProduct