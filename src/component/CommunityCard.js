import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'

export default function CommunityCard() {
  return (
    <div className='community-card-box'>
      <div className='writer-box'>
        <FontAwesomeIcon icon={faCircleUser} size='2x' />
        <p>에디터</p>
      </div>

      <div className='title-box'>술쟁이 에디터 Pick!</div>

      <div className='content-img-box'>
        <img className='content-img' src='https://www.sooldamhwa.com/_next/image?url=https%3A%2F%2Fd38cxpfv0ljg7q.cloudfront.net%2Fadmin_contents%2Fthumbnail%2FOH2l-1642147642650-apsd0.jpg&w=1920&q=75' />
      </div>

      <div className='content-like-comment'>
        <FontAwesomeIcon icon={faHeart} className='content-icon'/>
        {/* <FontAwesomeIcon icon={faComment} className='content-icon'/> */}
      </div>

      <div className='content-box'>올 가을 제철회랑 어울리는 찰떡 술은 바로?😘</div>
    </div>
  )
}