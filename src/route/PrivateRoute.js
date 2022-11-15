import React from 'react'
import { Navigate } from 'react-router-dom';
import Mypage from '../page/Mypage'
import DataRecommend from '../page/Recommend/DataRecommend';

const PrivateRoute = ({authenticate, setAuthenticate, userName, setUserName, calendar }) => {
  return (
    authenticate === true? <Mypage authenticate={authenticate} setAuthenticate={setAuthenticate}  userName={userName} setUserName={setUserName} calendar={calendar} />:<Navigate to="/login" />
  )
}

export default PrivateRoute