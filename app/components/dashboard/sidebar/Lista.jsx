
import Link from 'next/link';
import React from 'react'

import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
  } from "react-icons/md";

  
  const menuItems = [
        {
            id:1,
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
            id:2,
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
            id:3,
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
            id:4,
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
        {
            id:5,
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
  ];


  const Lista = () => {
    return (
      <div className="">
      <ul className='w-full h-full flex justify-between flex-col'>
        {
            menuItems.map(({title,path,icon,id})=>(
                <li key={id} className='w-full h-auto p-5 hover:bg-purple-600 hover:rounded-md '>
                <Link href={path} className='flex items-center space-x-2'>
                <div>{icon}</div>
                <h1>{title}</h1>
                </Link>
                </li>
            ))
        }
      </ul>
      </div>
    );
  };
  
  export default Lista;
