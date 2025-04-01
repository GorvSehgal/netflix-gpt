import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { logo } from '../utils/constant';

const Header = () => {
  const navigate= useNavigate();
  const dispatch= useDispatch();
  const user = useSelector((store)=>store.users);
  const handleSignOut=()=>{
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  }
  useEffect(()=>{
        
    const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,displayName, email,photoURL} = user;
          dispatch(addUser({uid,displayName, email, photoURL}));
          navigate("/browse");
         
        } else {
            dispatch(removeUser());
            navigate("/");
        }
      });
      return () => unsubscribe(); // Cleanup subscription on unmount
},[]);
  return (
    <div className ="flex bg-gradient-to-b from-black z-10 flex justify-between">
        <img className ="w-44"src={logo}
    alt='Logo'/>
    {console.log(user)}
    {user &&(<div className='flex p-2'>
    <img 
            className="hidden md:block w-12 h-12 "
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white    ">
            (Sign Out)
          </button>
          </div>)}
    </div>
  )
}

export default Header