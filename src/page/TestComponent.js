import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import LoginService from '../service/LoginService';

export default function TestComponent(props, {setAuthenticate}) {

  const navigate = useNavigate();

  const goToJoin = () => {
    navigate("/join");
  };

  // const loginUser = (evnet) => {
  //     evnet.preventDefault();
  //     console.log("Click!!");
  //     setAuthenticate(true);
  //     navigate("/mypage");
  // };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmailHandler = (event) => {
    setEmail(event.target.value)
  }

  const changePasswordHandler = (event) => {
    setPassword(event.target.value)
  }

  const login = (event) => {
    event.preventDefault();
    let login = {
      email: email,
      password: password
    };
    console.log("login => " + JSON.stringify(login));
    LoginService.login(login).then(res => {
      setAuthenticate(true);
      props.history.push('/');
    
    });
    console.log("Click!!");
    navigate("/mypage");

  }

  const loginUser = (evnet) => {
    evnet.preventDefault();
    console.log("Click!!");
    setAuthenticate(true);
    navigate("/mypage");
};

  return (
    <div>
      <Container id="panel"  onSubmit={(evnet)=>loginUser(evnet)}>
        <Form className='login-form'>
          <div className='login-title'><h1>술자리</h1></div>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Col sm>
              <Form.Control className="login-input" type="text" placeholder="이메일 혹은 아이디"
                onChange={changeEmailHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Col sm>
              <Form.Control className="login-input" type="password" placeholder="비밀번호"
                onChange={changePasswordHandler} />
            </Col>
          </Form.Group>
          <br />

          <div className='login-btn-box'>
            <Button variant="secondary" type="submit" className='login-btn' onClick={login}>
              로그인하기
            </Button>
          </div>

          <div className='login-etc'>
            <ul>
              <li onClick={goToJoin} style={{ cursor: 'pointer' }}>회원가입</li>
              <li>|</li>
              <li style={{ cursor: 'pointer' }}>아이디 찾기</li>
              <li>|</li>
              <li style={{ cursor: 'pointer' }}>비밀번호 찾기</li>
            </ul>
          </div>

        </Form>
      </Container>
    </div>
  )
}
