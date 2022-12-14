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
            <h1 className='join-title'>๐ข</h1>
        </Row>

            <Row style={{ marginBottom: '5rem' }}>
                <Col xs={12} style={{ textAlign: 'center', marginBottom: '1rem'}}><img className='about-logo-img' src='http://localhost:30/images/sool.jpg' alt='์ ์๋ฆฌ ์ด๋ฏธ์ง' /></Col>
                <Col xs={12}>
                    <div style={{ backgroundColor: 'lightgray', padding: '10px' }}>
                        2017๋๋ ํ๋ฐ๊ธฐ, ์ ํต์ฃผ ์จ๋ผ์ธ ํ๋งค๊ฐ ํ๊ฐ๋จ๊ณผ ๋์์ ์ฝ๋ก๋19 ํ์ฐ์ผ๋ก ์ธํ โํ์ โ ๋ฌธํ์ ์ ํ์ผ๋ก ์ ํต์ฃผ ํ๋งค๋ ๊ธ์ฆ

                        ์จ๋ผ์ธ ์ ํต์ฃผ ํ๋งค๋ฅผ ๋ณธ๊ฒฉํํ๊ธฐ ์์ ์ ํต์ฃผ๋ฅผ ์ฆ๊ธฐ๊ธฐ ์ํ ์ ๋๋ก ๋ ํ๋ ์ดํ ์๋น์ค๋ฅผ ์ ๊ณตํ๋ ์๋น์ค์๋๋ค.
                    </div>
                </Col>
            </Row>

            <Row>
                <h1 className='join-title'>๐งโ๐ป๊ฐ๋ฐ์ ์๊ฐ</h1>
            </Row>

            {/* ์คํ๋ฆฐ */}
            <Row style={{ textAlign: 'center' }}>
                <Col xs={6}><img className='about-logo-img' src='http://localhost:30/images/ohr.jpg' alt='๊ฐ๋ฐ์ ์คํ๋ฆฐ' style={{ width: '70%', borderRadius: '100%' }} /></Col>
                <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Row style={{ marginBottom: '1rem' }}>
                        <Col><FontAwesomeIcon icon={faUser} /></Col>
                        <Col>
                            <Row>์ด๋ฆ</Row>
                            <Row style={{ width: '100px' }}>์คํ๋ฆฐ</Row>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: '1rem' }}>
                        <Col><FontAwesomeIcon icon={faCalendar} /></Col>
                        <Col>
                            <Row>์๋์์ผ</Row>
                            <Row>99.10.03</Row>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: '1rem' }}>
                        <Col><FontAwesomeIcon icon={faEnvelope} /></Col>
                        <Col>
                            <Row>์ด๋ฉ์ผ</Row>
                            <Row>ohr1003@gmail.com</Row>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: '1rem' }}>
                        <Col><FontAwesomeIcon icon={faGithub} /></Col>
                        <Col>
                            <Row>๊นํ๋ธ</Row>
                            <Row>@hyexrin</Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <hr /><br/>
            {/* ๋ฅ์ ์ง */}
            <Row style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <Col xs={6}><img className='about-logo-img' src='http://localhost:30/images/uuj.png' alt='๊ฐ๋ฐ์ ๋ฅ์ ์ง' style={{ width: '76%', borderRadius: '100%' }} /></Col>
                <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Row style={{ marginBottom: '1rem' }}>
                        <Col><FontAwesomeIcon icon={faUser} /></Col>
                        <Col>
                            <Row>์ด๋ฆ</Row>
                            <Row style={{ width: '100px' }}>๋ฅ์ ์ง</Row>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: '1rem' }}>
                        <Col><FontAwesomeIcon icon={faCalendar} /></Col>
                        <Col>
                            <Row>์๋์์ผ</Row>
                            <Row>99.10.20</Row>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: '1rem' }}>
                        <Col><FontAwesomeIcon icon={faEnvelope} /></Col>
                        <Col>
                            <Row>์ด๋ฉ์ผ</Row>
                            <Row>yyj9434@naver.com</Row>
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: '1rem' }}>
                        <Col><FontAwesomeIcon icon={faGithub} /></Col>
                        <Col>
                            <Row>๊นํ๋ธ</Row>
                            <Row>@yyj9434</Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className='join-title'>
                <h1>๐ํ๋ก์ ํธ ๊ธฐ์ </h1>
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