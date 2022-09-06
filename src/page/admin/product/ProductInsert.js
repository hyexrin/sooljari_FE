import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'

const ProductInsert = () => {
  return (
    <Container>
    <Form>
        <div><h1>상품 등록</h1></div>

        <Form.Group as={Row}>
            <Col>
                <Form.Label>이름</Form.Label>
                <Form.Control type='text' placeholder='상품 이름' />
            </Col>
        </Form.Group>

        <Form.Group as={Row}>
            <Col>
                <Form.Label>가격</Form.Label>
                <Form.Control type='text' placeholder='상품 가격' />
            </Col>
        </Form.Group>

        <Form.Group as={Row}>
            <Col>
                <Form.Label>도수</Form.Label>
                <Form.Control type='text' placeholder='상품 도수' />
            </Col>
        </Form.Group>

        <Form.Group as={Row}>
            <Col>
                <Form.Label>지역</Form.Label>
                <Form.Control type='text' placeholder='상품 지역' />
            </Col>
        </Form.Group>

        <Form.Group as={Row}>
            <Col>
                <Form.Label>설명</Form.Label>
                <Form.Control type='text' placeholder='상품 설명' />
            </Col>
        </Form.Group>

        <div>
            <Button variant="secondary" type="submit">
                상품 등록
            </Button>
        </div>
    </Form>
</Container>
  )
}

export default ProductInsert