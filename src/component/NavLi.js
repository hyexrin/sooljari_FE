import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavLi = ({icon}) => {
    const navigate = useNavigate();

    const goTo = () => {
        navigate(`${icon.url}`);
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