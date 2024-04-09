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
            <div>
                <Login />
            </div>
        )
    }
  return (
    <div>
      <SignUp />
    </div>
  )
}

export default AuthPage;
