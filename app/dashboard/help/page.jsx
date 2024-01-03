'use client'
import React from 'react'
import { useState } from 'react'

const Help = () => {

  const [formData,setFormData] = useState({
    title:'',
    email:'',
    message:'',
  });


  const handleChange = async (e) => {

    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleSubmit = async(e)=>{

    e.preventDefault();
    const res = await fetch('/api/helpform',{
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({formData})
    })

    if(formData.title.length < 3 || formData.email.length < 3 || formData.message.length < 3){
      alert('Email isn\'t sent, because it requires minimun of 3 caracters in every input!')
    }else{  alert('E-mail has been send to admin.') }
   

    setFormData({
      title:'',
    email:'',
    message:'',
    })
}

  return (
    <div className='w-full h-auto flex justify-center items-center flex-col'>
    <form onSubmit={handleSubmit} className='w-full h-auto p-7 flex flex-col rounded-md bg-purple-900'>
    <div className='w-full h-auto p-3 flex justify-center items-center mb-4'>
    <h1 className='text-4xl font-extrabold text-white'>CONTACT US</h1>
    </div>
    <input name='title' value={formData.title} onChange={handleChange} className='w-full h-auto p-3 rounded-md' type='text' placeholder='Title'/>
    <input name='email' value={formData.email} onChange={handleChange} type='email' placeholder='Email'  className='w-full h-auto p-3 my-3 rounded-md'/>
    <textarea name='message' onChange={handleChange} value={formData.message} placeholder='Type your message' className='p-3 rounded-md' rows={10} ></textarea>
    <button type='submit' className='w-full h-auto p-3 bg-yellow-400 mt-3 rounded-md'>SUBMUT</button>
    </form>
    </div>
  )
}

export default Help;