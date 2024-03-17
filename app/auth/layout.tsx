const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-cyan-500'>
      {children}
    </div>
  );
};
export default AuthLayout;
