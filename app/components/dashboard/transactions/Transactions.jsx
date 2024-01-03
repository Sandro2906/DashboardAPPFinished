'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const Transactions = () => {
  const initialTransactions = [
    { name: 'Sandro Gataric', status: 'Pending', date: '30.11.2023', amount: '3000$' },
    { name: 'Maja Stanic', status: 'Pending', date: '24.11.2023', amount: '230$' },
    { name: 'Kristian Gataric', status: 'Pending', date: '16.11.2023', amount: '160$' },
    { name: 'Romana Preradovic', status: 'Pending', date: '11.11.2023', amount: '1200$' },
    { name: 'David Malesevic', status: 'Pending', date: '30.11.2023', amount: '3000$' },
    { name: 'Dario Blagojevic', status: 'Pending', date: '24.11.2023', amount: '230$' },
    { name: 'Ognjen Jorgic', status: 'Pending', date: '16.11.2023', amount: '160$' },
    { name: 'Slobodanka Stevic', status: 'Pending', date: '11.11.2023', amount: '1200$' },
  
  ];

  const [transactions, setTransactions] = useState(initialTransactions);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='pt-4 text-white'>
      <div className='w-full h-auto p-4 bg-purple-900 rounded-lg'>
        <h1 className='text-xl text-white pb-3 font-semibold'>Transactions</h1>
        
        <input
          type='text'
          placeholder='Search by name...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-full text-black mb-3 p-3 rounded-md'
        />
        
        <table className='w-full h-auto gap-2'>
          <thead className='text-xl font-extrabold'>
            <tr>
              <td>Name</td>
              <td>Status</td>
              <td>Date</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map(({ name, status, date, amount }, index) => (
              <tr key={index}>
                <td className='flex gap-2 items-center'>
                  <Image width={40} height={40} alt='pic' className='' src='/favicon.ico' />
                  {name}
                </td>
                <td>{status}</td>
                <td>{date}</td>
                <td>{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
