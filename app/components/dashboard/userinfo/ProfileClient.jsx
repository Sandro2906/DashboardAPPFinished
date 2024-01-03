'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
      user && (
          <div className='w-full h-auto'>
            <img className='rounded-full' src={user.picture} alt={user.name} />
            <h2 className='text-2xl'>{user.name}</h2>
            <p>{user.email}</p>
          </div>
      )
  );
}