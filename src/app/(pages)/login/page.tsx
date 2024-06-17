'use client';
import React, { useState } from 'react';
import { login } from './loginAction';
import { useFormState } from 'react-dom';
export default function Page() {
  const [loginError, setLoginError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: Event) => {
    e.preventDefault();
    const res = await login(username, password);
    if (res == undefined) {
      return;
    }
    if (res.message != 'success') {
      setLoginError(res.message);
    } else {
      setLoginError('');
    }
  };

  return (
    <section className='flex h-full w-full flex-col items-center justify-center space-y-3 p-10'>
      <h1 className='text-2xl font-semibold'>Please login before using DiGi</h1>
      <form className='flex flex-col space-y-5' id='loginForm'>
        <fieldset className='flex space-x-3'>
          <label>username :</label>
          <input
            className='px-2 text-black'
            type='text'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />
        </fieldset>
        <fieldset className='flex space-x-3'>
          <label>password :</label>
          <input
            className='px-2 text-black'
            type='text'
            name='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </fieldset>
        <div className='flex flex-row justify-between'>
          <input
            className='h-[35px] w-[120px] cursor-pointer rounded-lg bg-blue-700 font-bold text-white hover:bg-blue-900'
            type='submit'
            value='login'
            onClick={handleLogin}
          />
          <input
            className='h-[35px] w-[120px] cursor-pointer rounded-lg border-2 border-blue-700 font-bold hover:border-blue-900'
            type='submit'
            value='signin'
          />
        </div>
      </form>

      {loginError != '' && (
        <div
          className='mx-5 flex min-h-[40px] w-[22vw] items-center rounded-md bg-red-400 px-5 text-white'
          id='loginErrorMessage'
        >
          {loginError}
        </div>
      )}
    </section>
  );
}
