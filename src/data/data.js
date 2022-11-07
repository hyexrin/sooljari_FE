import React from 'react'
import { faUser, faMagnifyingGlass, faHouse, faCommentDots, faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const links = [
  {
    id: 1,
    url: '/category',
    text: '전통주자리',
  },
  {
    id: 2,
    url: '/community',
    text: '담화자리',
  },
  {
    id: 3,
    url: '/datarecommend',
    text: '취향자리',
  },
  {
    id: 4,
    url: '/about',
    text: '술자리란?',
  }
]

export const social = [
  {
    id: 1,
    url: '/search',
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} className="social-icon"/>
  },
  {
    id: 2,
    url: '/mypage',
    icon: <FontAwesomeIcon icon={faUser} className="social-icon"/>
  }
]

export const search = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faMagnifyingGlass} />
    }
]

export const botNav = [
  {
    id: 1,
    title: '홈',
    url: '/',
    icon: <FontAwesomeIcon icon={faHouse} className='botnav-icon'/>,
    choice_img: 'https://cdn-icons-png.flaticon.com/512/1946/1946436.png'
  },
  {
    id: 2,
    title: '카테고리',
    url: '/category',
    icon: <FontAwesomeIcon icon={faBars} className='botnav-icon'/>,
    choice_img: 'https://cdn-icons-png.flaticon.com/512/1946/1946436.png'
  },
  {
    id: 3,
    title: '커뮤니티',
    url: '/community',
    icon: <FontAwesomeIcon icon={faCommentDots} className='botnav-icon'/>,
    choice_img: 'https://cdn-icons-png.flaticon.com/512/1946/1946436.png'
  },
  {
    id: 4,
    title: '마이페이지',
    url: '/mypage',
    icon: <FontAwesomeIcon icon={faUser} className='botnav-icon'/>,
    choice_img: 'https://cdn-icons-png.flaticon.com/512/456/456212.png'
  }
]