import React from 'react'
import { Navigate } from 'react-router-dom';
import Mypage from '../page/Mypage'

const PrivateRoute = ({authenticate, setAuthenticate, userName, setUserName}) => {
  return (
    authenticate == true? <Mypage authenticate={authenticate} setAuthenticate={setAuthenticate}  userName={userName} setUserName={setUserName}/>:<Navigate to="/login" />
  )
}

export default PrivateRoute