import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const NavLi = ({icon, authenticate}) => {
    const navigate = useNavigate();

    const goTo = () => {
      icon?.id === 3 && authenticate === false ? 
      Swal.fire({
            icon: "warning",
            // title: "회원만 볼 수 있어요⚠️",
            text: '로그인이 필요한 서비스 입니다🤫',
            showCancelButton: true,
            confirmButtonText: "확인",
            cancelButtonText: "취소",
          }).then((res) => {
            /* Read more about isConfirmed, isDenied below */
            if (res.isConfirmed) {
              //삭제 요청 처리
            }
            else {
              //취소
            }
          })
      : navigate(`${icon.url}`)
    }

  return (
    <div className='li-box'>
        <li className='li-li' key={icon?.id}>
            <div onClick={goTo}>{icon?.icon}{icon?.text}</div>
        </li>
    </div>
  )
}

export default NavLi