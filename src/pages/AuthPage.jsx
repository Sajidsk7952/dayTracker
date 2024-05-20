import React from 'react'
import { useLocation } from 'react-router-dom';
import Login from '../components/authPage/Login';
import SignUp from '../components/authPage/SignUp';

const AuthPage = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('type');
    console.log(query);
    if(query === "login"){
        return(
            <div className='relative top-[40px]'>
                <Login />
            </div>
        )
    }
  return (
    <div className='relative top-[40px]'>
      <SignUp />
    </div>
  )
}

export default AuthPage;
