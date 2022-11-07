import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FaBars } from 'react-icons/fa';
import { links, social, search } from '../data/data';
import logo from '../color-logo.png';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import NavLi from './NavLi';

export const customMedia = generateMedia({
  desktop: '2000px',
  tablet: '60em',
  mobile: '992px'
})

const Navcenter = styled.div`
${customMedia.lessThan('mobile')`
position: fixed;
top: 0;
left: 0;
z-index: 1;
width: 100%;
height: 72px;
transition: 0.4s ease;
background-color: #fff;
&.hide {
  transform: translateY(-137.2px);
}
	`}
  ${customMedia.lessThan('desktop')`
position: fixed;
top: 0;
left: 0;
z-index: 1;
width: 100%;
transition: 0.3s ease;
background-color: #fff;
&.hide {
  background-color: hsla(0, 0%, 100%, 0.8);
}
	`}
`;

const throttle = function (callback, waitTime) {
  let timerId = null;
  return (e) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback.call(this, e);
      timerId = null;
    }, waitTime);
  };
};

const Navbar = () => {
  // 메뉴버튼 
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  const test = () => {
    if (showLinks) {
      setShowLinks(!showLinks);
    }
    linksContainerRef.current.style.height = '0px';
  }

  // scroll event
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
    console.log("scroll 감지");
    linksContainerRef.current.style.height = '0px';
  };

  const throttleScroll = throttle(handleScroll, 50);

  useEffect(() => {
    documentRef.current.addEventListener('scroll', throttleScroll);
    return () => documentRef.current.removeEventListener('scroll', throttleScroll);
  }, [pageY]);

  // useNavigate
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  // 검색
  const search = (event) => {
    if (event.key === "Enter"){
      // console.log("Enter key press", event.key);
      // 입력한 검색어를 읽어와 url 변경
      let keyword = event.target.value
      navigate(`/?q=${keyword}`)
    }
  }

  return (
    <nav>

      <Navcenter className={hide && 'hide'}>
        <div className='nav-center'>

          <div className='nav-header'>
            {/* search 기능 */}
            <div className='search-wrap'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
              <input className='search' type='text' placeholder='술자리에서 전통주 취향 찾기!' onKeyPress={search} />
              {/* <input className='search' type='text' placeholder='술자리에서 전통주 취향 찾기!' /> */}
            </div>
            <button className='nav-toggle' onClick={toggleLinks} onBlur={test}>
              <FaBars onClick={test} />
            </button>
          </div>

          {/* 메뉴버튼 클릭시 목록 보이도록 */}
          <div className='links-container' ref={linksContainerRef}>

            <ul className='links' ref={linksRef}>
              <li><img src={logo} className='logo' alt='logo' onClick={(event) => goToHome(event)} /></li>
              {/* data에서 Nav목록 가져오기 */}
              {links.map((link) => (
                <NavLi key={link.id} icon={link} />
              ))}
            </ul>
          </div>

          {/* mypage 아이콘 가져오기 */}
          <div className='social-icons'>
            <ul>
              {social.map((socialIcon) => (
                <NavLi key={socialIcon.id} icon={socialIcon} />
              ))}
            </ul>
          </div>

        </div>
      </Navcenter>
    </nav>
  );
};

export default Navbar;