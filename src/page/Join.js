import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Join = () => {
    return (
        <div>
            <Container id="panel">
                <Form className='join-form'>
                    <div className='join-title'><h1>회원가입</h1></div>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                            <Form.Label>아이디</Form.Label>
                            <Form.Control className="join-input" type="text" placeholder="이메일 혹은 아이디" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <Col sm>
                            <Form.Control className="join-input" type="password" placeholder="영문, 숫자 모두 사용, 8~20자 내" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label>이름</Form.Label>
                        <Col sm>
                            <Form.Control className="join-input" type="text" placeholder="이름" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label>생년월일</Form.Label>
                        <Col sm>
                            <Form.Control className="join-input" type="text" placeholder="생년월일 8자리" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label>휴대전화</Form.Label>
                        <Col sm>
                            <Form.Control className="join-input" type="text" placeholder="휴대전화 11자리" />
                        </Col>
                    </Form.Group>

                    <br />
                    <div className='join-btn-box'>
                        <Button variant="secondary" type="submit" className='join-btn' >
                            가입하기
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default Join