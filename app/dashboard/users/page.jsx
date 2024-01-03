'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import DeleteButton from '@/app/components/dashboard/button/DeleteButton';

const getData = async () => {
  const res = await fetch('/api/formuser', {
    cache: 'no-store',
  });
  const data = await res.json();
  return data.userss;
};

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getData();
      setUsers(userData);
    };

    fetchData();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-auto bg-purple-900 p-4 rounded-lg text-white">
      <div className="w-full h-auto flex justify-between items-center">
        <Link href="/dashboard/users/add" className="w-[200px]">
          <button className="w-full h-auto p-3 bg-black rounded-md text-white">
            Add New
          </button>
        </Link>
        <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-[200px] text-black p-3 rounded-md"
      />
      </div>
      
      <table className="w-full h-auto mt-5">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(
            ({ _id, username, email, createdAt, isAdmin, isActive }) => (
              <tr key={_id}>
                <td>
                  <div className="flex items-center gap-2">{username}</div>
                </td>
                <td>{email}</td>
                <td>{createdAt}</td>
                <td>{isAdmin ? 'Admin' : 'Client'}</td>
                <td>{isActive ? 'True' : 'False'}</td>
                <td className="gap-3">
                  <div className="w-full flex">
                    <Link href={`/dashboard/users/${_id}`}>
                      <button className="bg-sky-500 rounded-sm p-1 mr-2 cursor-pointer flex justify-center items-center">
                        View
                      </button>
                    </Link>
                    <DeleteButton id={_id} />
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
