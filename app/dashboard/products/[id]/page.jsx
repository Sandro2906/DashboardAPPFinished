'use client'
import React, { useEffect, useState } from 'react';

const SingleProductPage = ({ params }) => {

  const [single, setSingle] = useState({
    title: '',
    desc: '',
    price: 0,
    stock: 0,
    color: '',
    size: 0
  });

  async function getData(){
    const res = await fetch(`/api/singleproduct/?id=${params.id}`, {
      cache: 'no-store',
    })
    const data = await res.json();
    return data.product;
  }

  useEffect(()=>{
    async function setData(){
      const product = await getData();

      setSingle({
        title: product.title,
        desc: product.desc,
        price: product.price,
        stock: product.stock,
        color: product.color,
        size: product.size
      })
      
    }

    setData()
  },[params.id])


  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSingle({
      ...single,
      [name]: value
    });
  };


  async function updateUserData(e) {
    e.preventDefault();

      const res = await fetch(`/api/updateproduct?id=${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ single })
      });

  }


  return (
    <div>
    <form className='text-white w-full'>
    <label className='text-xl pl-3'>Title</label>
    <input
    type='text'
    name='title'
    value={single.title}
    onChange={handleInputChange}
    placeholder='/'
    className='bg-blue-950 rounded-md p-3 w-full mb-4'
    />
    <label className='text-xl pl-3'>Description</label>
    <input
    type='text'
    name='desc'
    value={single.desc}
    onChange={handleInputChange}
    placeholder='/'
    className='bg-blue-950 rounded-md p-3 w-full mb-4'
    />
    <label className='text-xl pl-3'>Price</label>
    <input
    type='number'
    name='price'
    value={single.price}
    onChange={handleInputChange}
    placeholder='/'
    className='bg-blue-950 rounded-md p-3 w-full mb-4'
    />
    <label className='text-xl pl-3'>Stock</label>
    <input
    type='number'
    name='stock'
    value={single.stock}
    onChange={handleInputChange}
    placeholder='/'
    className='bg-blue-950 rounded-md p-3 w-full mb-4'
    />
    <label className='text-xl pl-3'>Color</label>
    <input
    type='text'
    name='color'
    value={single.color}
    onChange={handleInputChange}
    placeholder='/'
    className='bg-blue-950 rounded-md p-3 w-full mb-4'
    />
    <label className='text-xl pl-3'>Size</label>
    <input
    type='number'
    name='size'
    value={single.size}
    onChange={handleInputChange}
    placeholder='/'
    className='bg-blue-950 rounded-md p-3 w-full mb-4'
    />
    <button onClick={updateUserData} className='w-full h-auto p-3 bg-purple-800 mt-2 rounded-md'>UPDATE</button>
  </form>
  </div>
  );
};

export default SingleProductPage;
