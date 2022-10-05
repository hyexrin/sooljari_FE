import React, {useContext, useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassWater } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import Calendar from '../component/Calendar'

const Mypage = () => {

  let now = new Date();
  let year = now.getFullYear();

  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let todayMonth = month[now.getMonth()];
  // let todayDate = now.getDate();
  
  // 로그인 후 사용자 이름 데이터 가져오기
  
  // const [userName, setUserName] = useState("");
  //
  // useEffect(() => {
  //   fetch("/api/mypage")
  //       .then(res => res.text())
  //       .then(userName => {
  //         setUserName(userName);
  //       });
  // }, [])

  // // 마이페이지 정보 가져오기
  //   const response = await fetch(
  //       "http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/user/mypage",
  //       {
  //         method: "GET",
  //         headers: {
  //           "content-type": "application/json",
  //           Authorization: token,
  //         },
  //       }
  //   );
  //
  //   if (!response.ok) {
  //     throw new Error("마이페이지 정보를 불러오는데 실패했습니다");
  //   }
  //   const body = await response.json();
  //   return body;
  //   //


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
            <h3><b>홍길동</b>님 반가워요 :{')'}</h3>
          </Row>
          <Row>
            <h4>술 취향 설문 결과 다시보기 {'>'}</h4>
          </Row>

        </Col>
      </Row>

      <Row className='mypage-calender-box'>
        <Row>
          <Col className='mypage-calender-title'>
            <FontAwesomeIcon icon={faCalendar} className='mypage-calender-icon' />주류달력
          </Col>
        </Row>

        <Row>
          <Calendar />
        </Row>
      </Row>

    </Container>
  )
}

export default Mypage