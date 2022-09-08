import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ProductList = ({ product }) => {

  return (
    <Container className='admin-productList-box'>
      <Row>
        <Col className='admin-productList-col'><h4>ID-{product?.id}</h4></Col>
        <Col className='admin-productList-col'><div>{product?.name}</div></Col>
        <Col className='admin-productList-col'><img src={product?.image} className='admin-product-img' /></Col>
        <Col className='admin-productList-col'><div>{product?.price}원</div></Col>
        <Col className='admin-productList-col'><div>{product?.proof}%</div></Col>
        <Col className='admin-productList-col'>지역</Col>
        <Col className='admin-productList-col'>설명</Col>
      </Row>
    </Container>
  )
}

export default ProductList