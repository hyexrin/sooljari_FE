import React, {useContext, useEffect, useState} from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassWater, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import Calendar from '../component/Calendar'
import axios from 'axios';
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const Mypage = ({authenticate, setAuthenticate, userName, setUserName, calendar}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['X-AUTH-TOKEN'], ['userEmail']);
  const navigate = useNavigate();

  let now = new Date();
  let year = now.getFullYear();

  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let todayMonth = month[now.getMonth()];
  // let todayDate = now.getDate();

  const logOut = ({authenticate}) => {
      removeCookie('X-AUTH-TOKEN');
      removeCookie('userEmail');
      setAuthenticate(false);
      navigate('/login');
  }
  // const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   axios.get("http://localhost:8080/api/checkJWT", {withCredentials : true})
  //       .then(res => {
  //         setUserName(res.data);
  //       })
  // },[])

  const goToSurvey = () => {
    navigate('/survey');
  }

  const writeCalendar = () => {
    navigate('/writeCalendar', { state: { userName: userName}})
  }

  return (
    <Container className='mypage-box'>
      <Row className='mypage-title-box'>
        <Col><h2>마이페이지</h2></Col>
      </Row>

      <Row className='mypage-profile-box'>
        <Col xs={4}>
          <div className='mypage-profile-img-box'></div>
        </Col>

        <Col>
          <Row>
            <h2>Level <FontAwesomeIcon icon={faGlassWater} /></h2>
          </Row>
          <Row>
            <h3><b>{userName}</b>님 반가워요 :{')'}</h3>
          </Row>
          <Row>
            <h4 onClick={goToSurvey}>술 취향 설문 결과 다시보기 {'>'}</h4>
          </Row>

        </Col>
      </Row>

      <Row className='mypage-calendar-box'>
        <Row className='mypage-calendar-title-row'>
          <Col className='mypage-calendar-title'>
            <FontAwesomeIcon icon={faCalendar} className='mypage-calendar-icon' />주류달력
          </Col>
          <Col className='mypage-calendar-plus-box'>
            <FontAwesomeIcon icon={faPlus} onClick={writeCalendar} />
          </Col>
        </Row>

        <Row className='mypage-calendar-box-sub'>
          <Calendar userName={userName} calendar={calendar}/>
        </Row>
      </Row>

      <Row className='mypage-logout-box'>
        <Col><button onClick={logOut} className='mypage-logout-btn'>LOGOUT</button></Col>
      </Row>

    </Container>
  )
}

export default Mypage