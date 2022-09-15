import React, { Component } from 'react';
import JoinService from '../service/JoinService';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class JoinComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password : '',
            userName : '',
            birth : '',
            phone :''
        }

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeBirthHandler = this.changeBirthHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.join = this.join.bind(this);
    }

    changeEmailHandler = (event) => {
        this.setState({email:event.target.value})
    }
    changePasswordHandler = (event) => {
        this.setState({password: event.target.value})
    }
    changeUserNameHandler = (event) => {
        this.setState({userName: event.target.value})
    }
    changeBirthHandler = (event) => {
        this.setState({birth: event.target.value})
    }
    changePhoneHandler = (event) => {
        this.setState({phone: event.target.value})
    }

    join = (event) => {
        event.preventDefault();
        let join = {
            email : this.state.email,
            password : this.state.password,
            userName : this.state.userName,
            birth : this.state.birth,
            phone : this.state.phone
        };
        console.log("login => " + JSON.stringify(join));
        JoinService.join(join).then(res => {
            this.props.history.push('/login');
        });
    }

    cancel() {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                <Container id="panel">
                    <Form className='join-form'>
                        <div className='join-title'><h1>회원가입</h1></div>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm>
                                <Form.Label>아이디</Form.Label>
                                <Form.Control className="join-input" type="text" placeholder="이메일 혹은 아이디"
                                              value={this.state.email} onChange={this.changeEmailHandler}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Col sm>
                                <Form.Control className="join-input" type="password" placeholder="영문, 숫자 모두 사용, 8~20자 내"
                                              value={this.state.password} onChange={this.changePasswordHandler}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label>이름</Form.Label>
                            <Col sm>
                                <Form.Control className="join-input" type="text" placeholder="이름"
                                              value={this.state.userName} onChange={this.changeUserNameHandler}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label>생년월일</Form.Label>
                            <Col sm>
                                <Form.Control className="join-input" type="text" placeholder="생년월일 8자리"
                                              value={this.state.birth} onChange={this.changeBirthHandler}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label>휴대전화</Form.Label>
                            <Col sm>
                                <Form.Control className="join-input" type="text" placeholder="휴대전화 11자리"
                                              value={this.state.phone} onChange={this.changePhoneHandler}/>
                            </Col>
                        </Form.Group>

                        <br />
                        <div className='join-btn-box'>
                            <button variant="secondary" type="submit" className='join-btn' onClick={this.join}>
                                가입하기
                            </button>
                        </div>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default JoinComponent;
