'use client';

import { useState } from 'react';
import LoginComponent from './components/LoginComponents';
import SigninComponent from './components/SigninComponents';

export default function Page() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <section className='flex h-full w-full flex-col items-center justify-center space-y-3 py-10'>
      <LoginComponent isLogin={isLogin} setIsLogin={setIsLogin} />
      <SigninComponent isLogin={isLogin} setIsLogin={setIsLogin} />
    </section>
  );
}
