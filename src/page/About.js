import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendar, faEnvelope, faComment, faGlobe, faComputer } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
        <Container>

            <Row>
            <h1 className='join-title'>📢</h1>
        </Row>

            <Row style={{ marginBottom: '5rem' }}>
                <Col xs={12} style={{ textAlign: 'center', marginBottom: '1rem'}}><img className='about-logo-img' src='http://localhost:30/images/sool.jpg' alt='술자리 이미지' /></Col>
                <Col xs={12}>
                    <div style={{ backgroundColor: 'lightgray', padding: '10px' }}>
                        2017년도 하반기, 전통주 온라인 판매가 허가됨과 동시에 코로나19 확산으로 인한 ‘홈술’ 문화의 유행으로 전통주 판매량 급증

                        온라인 전통주 판매를 본격화하기 앞서 전통주를 즐기기 위한 제대로 된 큐레이팅 서비스를 제공하는 서비스입니다.
                    </div>
                </Col>
            </Row>

            <Row>
                <h1 className='join-title'>🧑‍💻개발자 소개</h1>
            </Row>

            {/* 오혜린 */}
            <Row style={{ textAlign: 'center' }}>
                <Col xs={6}><img className='about-logo-img' src='http://localhost:30/images/ohr.jpg' alt='개발자 오혜린' style={{ width: '70%', borderRadius: '100%' }} /></Col>
                <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Row style={{ marginBottom: '1rem' }}>
                        <Col><FontAwesomeIcon icon={faUser} /></Col>
                        <Col>
                            <Row>이름</Row>
                            <Row style={{ width: '100px' }}>오혜린</Row>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: '1rem' }}>
                        <Col><FontAwesomeIcon icon={faCalendar} /></Col>
                        <Col>
                            <Row>생년월일</Row>
                            <Row>99.10.03</Row>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: '1rem' }}>
                        <Col><FontAwesomeIcon icon={faEnvelope} /></Col>
                        <Col>
                            <Row>이메일</Row>
                            <Row>ohr1003@gmail.com</Row>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: '1rem' }}>
                        <Col><FontAwesomeIcon icon={faGithub} /></Col>
                        <Col>
                            <Row>깃허브</Row>
                            <Row>@hyexrin</Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <hr /><br/>
            {/* 류유진 */}
            <Row style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <Col xs={6}><img className='about-logo-img' src='http://localhost:30/images/uuj.png' alt='개발자 류유진' style={{ width: '76%', borderRadius: '100%' }} /></Col>
                <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Row style={{ marginBottom: '1rem' }}>
                        <Col><FontAwesomeIcon icon={faUser} /></Col>
                        <Col>
                            <Row>이름</Row>
                            <Row style={{ width: '100px' }}>류유진</Row>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: '1rem' }}>
                        <Col><FontAwesomeIcon icon={faCalendar} /></Col>
                        <Col>
                            <Row>생년월일</Row>
                            <Row>99.10.20</Row>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: '1rem' }}>
                        <Col><FontAwesomeIcon icon={faEnvelope} /></Col>
                        <Col>
                            <Row>이메일</Row>
                            <Row>yyj9434@naver.com</Row>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: '1rem' }}>
                        <Col><FontAwesomeIcon icon={faGithub} /></Col>
                        <Col>
                            <Row>깃허브</Row>
                            <Row>@yyj9434</Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className='join-title'>
                <h1>📒프로젝트 기술</h1>
            </Row>

            <Row className='about-prj'>
                <Row className='about-prj-boxs'>
                    <Col xs={5} className='about-prj-box' style={{backgroundColor: '#E9D8D8'}}>
                        <Row className='about-prj-category'>Language</Row>
                        <Row><FontAwesomeIcon icon={faComment} className='about-prj-icon'/></Row>
                        <Row>JavaScript</Row>
                        <Row>JAVA</Row>
                        <Row>Python</Row>
                        <Row>Html/Css</Row>
                        <Row>SQL</Row>
                    </Col >
                    <Col xs={5} className='about-prj-box' style={{backgroundColor: '#D8E9D8'}}>
                        <Row className='about-prj-category'>Infra & DB</Row>
                        <Row><FontAwesomeIcon icon={faComputer} className='about-prj-icon' /></Row>
                        <Row>AWS</Row>
                        <Row>Nginx</Row>
                        <Row>MySQL</Row>
                    </Col>
                </Row>

                <Row className='about-prj-boxs'>
                    <Col xs={5} className='about-prj-box' style={{backgroundColor: '#E9E9D8'}}>
                        <Row className='about-prj-category'>web FE</Row>
                        <Row><FontAwesomeIcon icon={faGlobe} className='about-prj-icon' /></Row>
                        <Row>React</Row>
                        <Row>BootStrap</Row>
                    </Col>
                    <Col xs={5} className='about-prj-box' style={{backgroundColor: '#D8D8E9'}}>
                        <Row className='about-prj-category'>web BE</Row>
                        <Row><FontAwesomeIcon icon={faGlobe} className='about-prj-icon' /></Row>
                        <Row>Spring Boot</Row>
                        <Row>JPA</Row>
                        <Row>Flask</Row>
                    </Col>
                </Row>
            </Row>

        </Container>
    )
}

export default About