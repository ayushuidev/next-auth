'use client';

import NextTopLoader from 'nextjs-toploader';
import { useEffect, useState } from 'react';

const NextLoader = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return <NextTopLoader color='#000000' />;
};

export default NextLoader;
