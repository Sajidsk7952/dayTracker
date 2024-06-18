import React, { useEffect } from 'react'
import Hero from '../components/homePage/Hero';
import Feautures from '../components/homePage/Feautures';
import authService from '../firebase/authService';
import {login,logout} from '../store/AuthSlice';
import {getAuth,onAuthStateChanged} from 'firebase/auth';
import { useDispatch,useSelector } from 'react-redux';
import TextEditor from '../components/workspace/TextEditor';
const HomePage = () => {
  // const auth = getAuth();
  // console.log(authService.auth);
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   const subs = onAuthStateChanged(authService.auth,(user)=>{
  //     if (user) {
  //       console.log(user);
  //       dispatch(login({...user}))
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  //   return ()=>{
  //     subs();
  //   }
  // },[dispatch]);
  const authState = useSelector((state)=>(state.auth));
  console.log(authState);
  return (
    <div className='top-[40px] relative'>
      <Hero />
      <Feautures />
      {/* <TextEditor /> */}
      home page is here
    </div>
  )
}

export default HomePage;
