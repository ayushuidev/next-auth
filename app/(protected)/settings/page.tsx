import { auth, signOut } from '@/auth';
import React from 'react';

const Settings = async () => {
  const session = await auth();

  const formAction = async () => {
    'use server';

    await signOut();
  };

  return (
    <div>
      {JSON.stringify(session)}
      <form action={formAction}>
        <button type='submit'>Sign Out</button>
      </form>
    </div>
  );
};

export default Settings;
