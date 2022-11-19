import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginOnlyCard() {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    }
  return (
    <div className='login-only-card'  onClick={goToLogin} >
        <span className='login-only-card-title'>⚠️술자리 회원만 볼 수 있어요!⚠️</span>
        로그인하고 내 취향에 맞는 전통주 추천 보러 가기🍶
    </div>
  )
}
