'use client'
import React, { useEffect, useState } from 'react';


const SingleUserPage = ({ params }) => {

  const [single, setSingle] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    adress: '',
  });

  async function getData(){
    const res = await fetch(`/api/singleuser/?id=${params.id}`, {
      cache: 'no-store',
    })
    const data = await res.json();
    return data.user;
  }

  useEffect(()=>{
    async function setData(){
      let user = await getData();
      setSingle({
        username: user.username,
        email: user.email,
        password: user.password,
        phone: user.phone,
        adress: user.adress,
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

      const res = await fetch(`/api/updateuser?id=${params.id}`, {
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
    <label className='text-xl pl-3'>Username</label>
    <input
    type='text'
    name='username'
    value={single.username}
    onChange={handleInputChange}
    placeholder='Type'
    className='bg-blue-950 rounded-md p-3 w-full mb-4'
    />
    <label className='text-xl pl-3'>Email</label>
    <input
    type='text'
    name='email'
    value={single.email}
    onChange={handleInputChange}
    placeholder='Type'
    className='bg-blue-950 rounded-md p-3 w-full mb-4'
    />
    <label className='text-xl pl-3'>Phone</label>
    <input
    type='number'
    name='phone'
    value={single.phone}
    onChange={handleInputChange}
    placeholder='Type'
    className='bg-blue-950 rounded-md p-3 w-full mb-4'
    />
    <label className='text-xl pl-3'>Address</label>
    <input
    type='text'
    name='adress'
    value={single.adress}
    onChange={handleInputChange}
    placeholder='Type'
    className='bg-blue-950 rounded-md p-3 w-full mb-4'
    />
    <label className='text-xl pl-3'>Password</label>
    <input
    type='password'
    name='password'
    value={single.password}
    onChange={handleInputChange}
    placeholder='Type'
    className='bg-blue-950 rounded-md p-3 w-full mb-4'
    />
    <button onClick={updateUserData} className='w-full h-auto p-3 bg-purple-800 mt-2 rounded-md'>UPDATE</button>
  </form>
  </div>
  );
};

export default SingleUserPage;
