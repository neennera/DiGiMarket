import React, { useEffect, useState } from 'react';
import { signin } from './signinAction';
import { login } from './loginAction';

interface propsInterface {
  isLogin: React.SetStateAction<boolean>;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SigninComponent({
  isLogin,
  setIsLogin,
}: propsInterface) {
  const [signinError, setSigninError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  useEffect(() => {
    setSigninError('');
  }, [isLogin]);

  const handleSignin = async () => {
    if (password != password2) {
      setSigninError('password not match');
      return;
    }
    const res = await signin(username, password);

    if (res.message != 'success') {
      setSigninError(res.message);
    }
  };

  if (isLogin) {
    return <></>;
  }
  return (
    <>
      <h1 className='mb-5 w-full text-center text-2xl font-semibold'>
        Create your account
      </h1>
      <form className='flex flex-col space-y-5' id='loginForm'>
        <fieldset className='flex w-[300px] space-x-3'>
          <label className='w-[25%]'>username</label>
          <input
            className='px-2 text-black'
            type='text'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />
        </fieldset>
        <fieldset className='flex w-[300px] space-x-3'>
          <label className='w-[25%]'>password</label>
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
        <fieldset className='flex w-[300px] space-x-3'>
          <label className='w-[25%]'>repeat passwaord</label>
          <input
            className='h-[50%] px-2 text-black'
            type='text'
            name='password'
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
            required
          />
        </fieldset>
        <div className='flex flex-row justify-between'>
          <input
            className='h-[35px] w-[120px] cursor-pointer rounded-lg bg-blue-700 font-bold text-white hover:bg-blue-900'
            type='submit'
            value='signin'
            onClick={(e) => {
              e.preventDefault();
              handleSignin();
            }}
          />
          <button
            className='h-[35px] w-[120px] cursor-pointer rounded-lg border-2 border-blue-700 font-bold text-white hover:border-blue-900'
            onClick={(e) => {
              e.preventDefault();
              setIsLogin(true);
            }}
          >
            cancel
          </button>
        </div>
      </form>

      {signinError != '' && (
        <div
          className='mx-5 flex min-h-[40px] w-full items-center rounded-md bg-red-400 px-5 text-black sm:w-[22vw]'
          id='signinErrorMessage'
        >
          {signinError}
        </div>
      )}
    </>
  );
}
