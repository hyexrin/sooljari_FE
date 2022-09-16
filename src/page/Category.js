import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../component/ProductCard'

const Category = ({ product }) => {
    return (
        <Container>
            <Row>
                {product?.map((product) => (
                    <Col key={product?.id} lg={3} md={4} xs={6}><ProductCard product={product} /></Col>
                ))}
            </Row>
        </Container>
    )
}

export default Category