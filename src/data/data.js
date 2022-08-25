import React from 'react'
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
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
    url: '/recommend',
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
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} size='2x'/>
  },
  {
    id: 2,
    url: '/login',
    icon: <FontAwesomeIcon icon={faUser} size='2x'/>
  }
]

export const search = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faMagnifyingGlass} />
    }
]