import React, { useState } from 'react'
import JoinService from '../service/JoinService';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


export default function JoinComponent(props) {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  }

  const changePasswordHandler = (event) => {
    setPassword(event.target.value)
  }

  const changeUserNameHandler = (event) => {
    setUserName(event.target.value)
  }

  const changeBirthHandler = (event) => {
    setBirth(event.target.value)
  }

  const changePhoneHandler = (event) => {
    setPhone(event.target.value)
  }

  const navigate = useNavigate();

  const join = (event) => {
    event.preventDefault();
    let join = {
      email: email,
      password: password,
      userName: userName,
      birth: birth,
      phone: phone
    };
    console.log("login => " + JSON.stringify(join));
    JoinService.join(join).then(res => {
      props.history.push('/login');
    });
    navigate('/');
  }

  const cancel = () => {
    props.history.push('/login');
  };
  return (
    <div>
      <Container id="panel">
        <Form className='join-form'>
          <div className='join-title'><h1>회원가입</h1></div>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Col sm>
              <Form.Label>아이디</Form.Label>
              <Form.Control className="join-input" type="text" placeholder="이메일 혹은 아이디"
                onChange={changeEmailHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label>비밀번호</Form.Label>
            <Col sm>
              <Form.Control className="join-input" type="password" placeholder="영문, 숫자 모두 사용, 8~20자 내"
                onChange={changePasswordHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label>이름</Form.Label>
            <Col sm>
              <Form.Control className="join-input" type="text" placeholder="이름"
                onChange={changeUserNameHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label>생년월일</Form.Label>
            <Col sm>
              <Form.Control className="join-input" type="text" placeholder="생년월일 8자리"
                onChange={changeBirthHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label>휴대전화</Form.Label>
            <Col sm>
              <Form.Control className="join-input" type="text" placeholder="휴대전화 11자리"
                onChange={changePhoneHandler} />
            </Col>
          </Form.Group>

          <br />
          <div className='join-btn-box'>
            <Button variant="secondary" type="submit" className='join-btn' onClick={join}>
              가입하기
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  )
}
