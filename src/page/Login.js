import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'

const Login = () => {
    return (
        <div>
        
        <Container id="panel">
           
            <Form className='Login-form'>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Col sm>
                        <Form.Control className="login-input" type="text" placeholder="UserID" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Col sm>
                        <Form.Control className="login-input" type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <br/>

                <div className="d-grid gap-1">
                    <Button variant="secondary" type="submit" >
                        Sign In
                    </Button>
                </div>
            </Form>
        </Container>
    </div>
        
    )
}

export default Login