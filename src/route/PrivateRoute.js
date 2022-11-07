import React from 'react'
import { Navigate } from 'react-router-dom';
import Mypage from '../page/Mypage'

const PrivateRoute = ({authenticate, setAuthenticate}) => {
  return (
    authenticate == true? <Mypage authenticate={authenticate} setAuthenticate={setAuthenticate} />:<Navigate to="/login" />
  )
}

export default PrivateRoute