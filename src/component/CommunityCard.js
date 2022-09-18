import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'

export default function CommunityCard({data}) {
  return (
    <div className='community-card-box'>
      <div className='writer-box'>
        <FontAwesomeIcon icon={faCircleUser} size='2x' />
        <p>{data?.user}</p>
      </div>

      <div className='title-box'>{data?.title}</div>

      <div className='content-img-box'>
        <img className='content-img' src={data?.image} />
      </div>

      <div className='content-like-comment'>
        <FontAwesomeIcon icon={faHeart} className='content-icon'/>
        {/* <FontAwesomeIcon icon={faComment} className='content-icon'/> */}
      </div>

      <div className='content-box'>{data?.text}</div>
    </div>
  )
}