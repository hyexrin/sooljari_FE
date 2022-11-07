import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import LoginService from '../service/LoginService';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const LoginComponent = ({setAuthenticate}) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookies] = useCookies(['X-AUTH-TOKEN']);

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

        // var loginArray = [];
        // loginArray.push({"name" : "email", "value" : email});
        // loginArray.push({"name" : "password", "value" : password});
        // console.log(loginArray);
        //
        // var datas = JSON.stringify(loginArray);
        
        LoginService.login(login).then(res => {
            setCookies('X-AUTH-TOKEN', res.data);
            axios.defaults.headers.common['X-AUTH-TOKEN'] = `${res.data}`
            setAuthenticate(true);
            navigate('/mypage');
       }).catch(err => {
           alert('아이디 또는 비밀번호가 틀렸습니다.')
        });

        // axios.post({
        //     url : 'http://localhost:8080/api/login',
        //     data : JSON.stringify(datas),
        //     dataType : 'text',  //위와 같이 dataType:json 일 경우 json 형태로 맞춰서 데이터를 받지 못해 오류 발생
        //     contentType : "application/json",
        //     error: function(xhr, status, error){
        //         alert(error);
        //     },
        //     success : function(token){
        //         console.log(token);
        //         var expireDay = 24 * 60 * 60 * 1000; //1일
        //         document.cookie = "X-AUTH-TOKEN=" + token + expireDay +"; path=/";
        //     }
        // });


    }

    const goToJoin = () => {
        navigate("/join");
    };

    return (
        <div>
            <Container id="panel" onSubmit={(event)=>login(event)}>
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

export default LoginComponent
