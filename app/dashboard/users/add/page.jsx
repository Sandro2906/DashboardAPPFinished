'use client'
import { useState } from 'react';
import React from 'react';

const AddProduct = () => {
  const [formData, setFormData] = useState({
   
    username: '',
    email: '',
    password: '',
    phone: '',
    isAdmin: false,
    isActive: true,
    adress: '', 
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
      const res = await fetch('/api/formuser', {
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
  
        <input
          name='username'
          
          value={formData.username}
          onChange={handleSubmit}
          className='my-3 p-4 w-[45%] rounded-md border-2 border-purple-600 bg-blue-950'
          type='text'
          placeholder='Username'
        />
        <input
          name='email'
          value={formData.email}
          onChange={handleSubmit}
          className='my-3 p-4 w-[45%] rounded-md border-2 border-purple-600 bg-blue-950'
          type='text'
          placeholder='Email'
        />
        <input
          placeholder='Password'
          type='password'
          name='password'
          value={formData.password}
          onChange={handleSubmit}
          className='my-3 p-4 w-[45%] rounded-md border-2 border-purple-600 bg-blue-950'
        />
        <input
          placeholder='Phone'
          type='number'
          name='phone'
          value={formData.phone}
          onChange={handleSubmit}
          className='my-3 p-4 w-[45%] rounded-md border-2 border-purple-600 bg-blue-950'
        />

      
        <select
          name='isAdmin'
          id='isAdmin'
          value={formData.isAdmin}
          onChange={handleSubmit}
          className='my-3 p-4 w-[45%] rounded-md border-2 border-purple-600 bg-blue-950'
        >
          <option>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select
          name='isActive'
          id='isActive'
          value={formData.isActive}
          onChange={handleSubmit}
          className='my-3 p-4 w-[45%] rounded-md border-2 border-purple-600 bg-blue-950'
        >
          <option>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

   
        <textarea
          id='adress'
          name='adress'
          value={formData.adress}
          onChange={handleSubmit}
          className='p-4 w-[100%] rounded-md border-2 border-purple-600 bg-blue-950 my-3'
          rows={10}
          placeholder='Address'
        ></textarea>
        <button type='submit' className='p-4 mt-3 rounded-md bg-sky-500 w-full text-white'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
