import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();

    const goToJoin = () => {
      navigate("/join");
    };

    const loginUser = (evnet) => {
        evnet.preventDefault();
        console.log("Click!!");
        setAuthenticate(true);
        navigate("/mypage");
    };

    return (
        <div>
            <Container id="panel">
                <Form className='login-form' onSubmit={(evnet)=>loginUser(evnet)}>
                    <div className='login-title'><h1>술자리</h1></div>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                            <Form.Control className="login-input" type="text" placeholder="이메일 혹은 아이디" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                            <Form.Control className="login-input" type="password" placeholder="비밀번호" />
                        </Col>
                    </Form.Group>
                    <br />

                    <div className='login-btn-box'>
                    <Button variant="secondary" type="submit" className='login-btn' >
                        로그인하기
                    </Button>
                    </div>

                    <div className='login-etc'>
                        <ul>
                            <li onClick={goToJoin} style={{cursor:'pointer'}}>회원가입</li>
                            <li>|</li>
                            <li style={{cursor:'pointer'}}>아이디 찾기</li>
                            <li>|</li>
                            <li style={{cursor:'pointer'}}>비밀번호 찾기</li>
                        </ul>
                    </div>

                </Form>
            </Container>
        </div>
    )
}

export default Login