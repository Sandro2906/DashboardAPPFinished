'use client'
import DeleteButtonProduct from '@/app/components/dashboard/buttonproduct/ButtonDeleteProduct'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'

const getData = async ()=>{
  const res = await fetch('/api/formproduct',{
      cache: 'no-store',
  })
  const data = await res.json();
  return data.productss
}

const ProductsPage = () => {

  const [data,setData] = useState([])
  useEffect(()=>{
      const funkcijaFetch = async ()=>{
          const podaci = await getData();
          setData(podaci);
      }
      funkcijaFetch();
   
  },[])

  return (
    <div className='w-full h-auto bg-purple-900 p-4 rounded-lg text-white'>
    <div className='w-full h-auto flex justify-between items-center'>
      <Link href='/dashboard/products/add' className='w-full'>
      <button className='w-full h-auto p-3 bg-black rounded-md text-white'>Add New</button>
      </Link>
      </div>
      <table className='w-full h-auto mt-5'>
      <thead>
        <tr>
        <td>Title</td>
        <td>Description</td>
        <td>Price</td>
        <td>Created At</td>
        <td>Stock</td>
        <td>Action</td>
        </tr>
      </thead>
      <tbody>
      {data.map((product)=>(
        <tr key={product._id}>
        <td><div className='flex items-center gap-2'>{product.title}</div></td>
        <td>{product.desc}</td>
        <td>{product.price}</td>
        <td>{product.createdAt}</td>
        <td>{product.stock}</td>
        <td className='gap-3'>
        <div className='flex'>
       <Link href={`/dashboard/products/${product._id}`} className='flex justify-center items-center'>
        <button className='bg-sky-500 rounded-sm p-1 mr-2 cursor-pointer pr-3 flex justify-center items-center'>View</button></Link>
        <DeleteButtonProduct id={product._id} />
        </div>
        </td>
      </tr>
      ))
    
      }
      </tbody>
      </table>
    </div>
  )
}

export default ProductsPage