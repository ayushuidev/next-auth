import LoginButton from '@/components/auth/login-button';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const font = Poppins({
  subsets: ['latin'],
  weight: '600',
});

export default function Home() {
  return (
    <main className='h-full flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-cyan-500'>
      <div className='space-y-6 text-center'>
        <h1
          className={cn(
            'text-6xl text-white font-semibold drop-shadow-md',
            font.className
          )}>
          🔐Auth
        </h1>
        <p className='text-white'>A simple authentication service</p>
        <LoginButton>
          <Button variant='secondary' size='lg'>
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
