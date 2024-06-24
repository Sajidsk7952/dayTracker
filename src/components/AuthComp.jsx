import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authService from '../firebase/authService';
import Loading from './Loading';

const AuthComp = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector(state => state.auth.authStatus);
  // console.log(authStatus);
  useEffect(() => {
    try {
      const user = authService.getAccount();
      if(user && authStatus){
        setLoading(false);
      }
      // else{
      //   navigate('/auth');
      // }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className='top-[40px] relative'>
      {loading? <div className='top-[25px] relative'><Loading /></div> : <div>{children}</div>}
    </div>
  );
}

export default AuthComp;
