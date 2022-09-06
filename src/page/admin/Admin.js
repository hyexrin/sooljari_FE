import React from 'react'
import '../../Admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBottleDroplet } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Admin = () => {

    const navigate = useNavigate();

    const GoToProduct = () => {
        navigate('/admin/product');
    }
    const GoToMember = () => {
        navigate('/admin/member');
    }

    return (
        <Container className='amdin-main-box'>
            <Row><h3>상품 및 회원 관리</h3></Row>

            <Row>
                <Col className='admin-col'><h1 className='admin-main-title'>관리자 페이지</h1></Col>
            </Row>
            <br />

            <Row>
                <Col>
                    <div className='admin-col' onClick={GoToProduct}>
                        <FontAwesomeIcon className='admin-img' icon={faBottleDroplet} />
                        <h5>상품 관리</h5>
                    </div>
                </Col>

                <Col>
                    <div className='admin-col' onClick={GoToMember}>
                        <FontAwesomeIcon className='admin-img' icon={faUsers} />
                        <h5>회원 관리</h5>
                    </div>
                </Col>

            </Row>
        </Container>
    )
}

export default Admin