import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import ProductList from '../component/ProductList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product }) => {

    const navigate = useNavigate();

    const GoTo = () => {
        navigate('/admin/product/insert');
    }
    return (
        <Container className='admin-product-box'>

            <Row>
                <Col><h1 className='admin-product-title'>상품 관리</h1></Col>
            </Row>

            <Row className='admin-product-list-row'>
                <Col><h3>상품 목록</h3></Col>
                <Col className='admin-product-plus-box' onClick={GoTo} lg={1}><FontAwesomeIcon icon={faPlus} /></Col>
                <Col className='admin-product-minus-box' lg={1}><FontAwesomeIcon icon={faMinus} /></Col>
            </Row>

            <Row>
                <Col>상품 ID</Col>
                <Col>상품 이름</Col>
                <Col>상품 이미지</Col>
                <Col>가격</Col>
                <Col>도수</Col>
                <Col>지역</Col>
                <Col>설명</Col>

                {product?.map((product) => (
                    <Col lg={12} key={product?.id}><ProductList product={product} /></Col>
                ))}
            </Row>

        </Container>
    )
}

export default Product