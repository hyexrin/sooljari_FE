import React from 'react'
import { useNavigate } from 'react-router-dom'


const GoToCard = ({icon}) => {

    const navigate = useNavigate();

    const goTo = () => {
        navigate(`${icon.url}`);
    };

  return (
    <div className='icon-box' onClick={goTo}>
        <div>{icon?.icon}</div>
        <div>{icon?.title}</div>
    </div>
  )
}

export default GoToCard