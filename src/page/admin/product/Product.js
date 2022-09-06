import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import ProductList from '../component/ProductList';
import { useState, useEffect } from 'react'

const Product = ({product}) => {

    const navigate = useNavigate();

    const GoTo = () => {
        navigate('/admin/product/insert');
    }
    return (
        <Container>
            <Row>
                <h1>상품 관리</h1>
            </Row>

            <hr />

            <Row>
                <h3>상품 목록</h3>

                {product?.map((product) => (
                    <Col key={product?.id}><ProductList product={product} /></Col>
                ))}
            </Row>

            <hr />

            <Row>
                <p onClick={GoTo}>상품 등록</p>
            </Row>
        </Container>
    )
}

export default Product