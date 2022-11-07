import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Container>
        <Row>
            <Col lg={6} xs={12}>
                <img className='about-logo-img' src='http://localhost:30/images/sool.jpg' alt='술자리 이미지'/>
                <div>
                2017년도 하반기, 전통주 온라인 판매가 허가됨과 동시에 코로나19 확산으로 인한 ‘홈술’ 문화의 유행으로 전통주 판매량 급증

온라인 전통주 판매를 본격화하기 앞서 전통주를 즐기기 위한 제대로 된 큐레이팅 서비스를 제공하는 서비스입니다.

                </div>
            </Col>
            <Col>
            
            <br/><br/><br/>
                <Row>
                    <h3>👉술자리의 대해 더 알고싶다면?</h3>
                    <a href='https://www.notion.so/a7d2adc2f4264d16a5d2a169070f3eb8' target='_blank'>술자리 Notion</a>
                </Row>
                <Row>
                    {/* 내용추가 예정 */}
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default About