import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'

const Body = () => {
    const dispatch= useDispatch();
    
    const appRouter= createBrowserRouter([
        {
            path: "/",
            element:<Login/>
        },
        {
            path: "browse",
            element: <Browse/>
        }
    ])
    useEffect(()=>{
        
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  // User is signed in, see docs for a list of available properties
                  // https://firebase.google.com/docs/reference/js/auth.user
                  const {uid,displayName, email,photoURL} = user;
                  dispatch(addUser({uid,displayName, email, photoURL}));
                 
                  // ...
                } else {
                  // User is signed out
                  // ...
                  dispatch(removeUser());
                  
                }
              });
    },[]);
  return (<>
    <RouterProvider router={appRouter}/>
    </>)
}

export default Body