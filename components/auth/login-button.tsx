'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

const LoginButton = ({ children, mode, asChild }: LoginButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/auth/login');
  };

  if (mode === 'modal') {
    return <div>TODO</div>;
  }
  return <div onClick={handleClick}>{children}</div>;
};

export default LoginButton;
