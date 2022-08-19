import React from 'react'
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/category',
    text: 'CATEGORY',
  },
  {
    id: 2,
    url: '/community',
    text: 'COMMUNITY',
  },
  {
    id: 3,
    url: '/recommend',
    text: 'RECOMMEND',
  },
  {
    id: 4,
    url: '/about',
    text: 'ABOUT',
  }
]

export const social = [
  {
    id: 1,
    url: '/mypage',
    icon: <FontAwesomeIcon icon={faUser} size='2x'/>
  }
]

export const search = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faMagnifyingGlass} />
    }
]