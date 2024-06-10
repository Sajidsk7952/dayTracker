import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthComp = ({ children, authentication = true }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector(state => state.auth.authStatus);
  console.log(authStatus);
  useEffect(() => {
    if (authentication && !authStatus) {
      window.alert('please login to continue!!');
      navigate('/auth');
    } else {
      setLoading(false);
    }
  }, [authStatus, authentication, navigate]);

  return (
    <div className='top-[40px] relative'>
      {loading? <div>loading...</div> : <div>{children}</div>}
    </div>
  );
}

export default AuthComp;
