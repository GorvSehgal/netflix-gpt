
import React, {  useState, useRef } from "react";
import Header from './Header'
import { checkvalidation } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile   } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVTAR } from "../utils/constant";


const Login = () => {
    const dispatch= useDispatch();
    const [isSigninForm, setIsSignInForm]= useState(true);
    const password= useRef(null);
    const email= useRef(null);
    const name= useRef(null);
    const [errorMessage, setErrorMessage]= useState(null);
    const handleButtonClick=()=>{
        const errorMessage=checkvalidation(email.current.value, password.current.value);
        setErrorMessage(errorMessage);
        if(errorMessage) return;
    
        if(!isSigninForm){
             createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: {USER_AVTAR}
                      })
                        .then(() => {
                          const { uid, email, displayName, photoURL } = auth.currentUser;
                          dispatch(
                            addUser({
                              uid: uid,
                              email: email,
                              displayName: displayName,
                              photoURL: photoURL,
                            })
                          );
                        })
                        .catch((error) => {
                          setErrorMessage(error.message);
                        });
                    })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+ "-" +errorMessage)
                    // ..
                });
        }else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                   
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+ "-" +errorMessage)
                });
        }
    }
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
        <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 bg-opacity-80 text-white'>
            <p className='text-3xl font-bold py-4'>{isSigninForm?'Sign In':'Sign Up'}</p>
            {!isSigninForm && <input type='text' ref={name} placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700'/>}
            <input type='text'ref={email} placeholder='Email Id' className='p-2 my-4 w-full bg-gray-700'/>
            <input type='password' ref={password} placeholder='Password' className='p-2 my-4 w-full bg-gray-700'></input>
            <p className="text-lg text-red-700 font-bold">{errorMessage}</p>
            <button className='p-4 my-4 bg-red-600 w-full' onClick={handleButtonClick}>{isSigninForm?'Sign In':'Sign Up'}</button>
            <p className='text-white cursor-pointer'onClick={toggleSignInForm}>{isSigninForm?'New to Netflix? Sign up Now':'Already registered Login here'} </p>
        </form>
        </div>
  )
}

export default Login