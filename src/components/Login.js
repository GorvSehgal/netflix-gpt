
import React, { useEffect, useState } from "react";
import Header from './Header'

const Login = () => {
    const [isSigninForm, setIsSignInForm]= useState(true);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSigninForm);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="baclground"/>
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 bg-opacity-80 text-white'>
            <p className='text-3xl font-bold py-4'>{isSigninForm?'Sign In':'Sign Up'}</p>
            {!isSigninForm && <input type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700'/>}
            <input type='text' placeholder='Email Id' className='p-2 my-4 w-full bg-gray-700'/>
            <input type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-700'></input>
            <button className='p-4 my-4 bg-red-600 w-full'>{isSigninForm?'Sign In':'Sign Up'}</button>
            <p className='text-white cursor-pointer'onClick={toggleSignInForm}>{isSigninForm?'New to Netflix? Sign up Now':'Already registered Login here'} </p>
        </form>
        Login</div>
  )
}

export default Login