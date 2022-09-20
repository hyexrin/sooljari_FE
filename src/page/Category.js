import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../component/ProductCard'
import CategoryComponent from '../component/CategoryComponent'


const Category = ({ product }) => {

    const categoryList = [
        { id: 0, name: "전체보기" },
        { id: 1, name: "탁주" },
        { id: 2, name: "약·청주" },
        { id: 3, name: "과실주" },
        { id: 4, name: "증류주" },
    ]
    return (
        <Container className='all-product-box' >

            <Row>
                <Col>
                    <CategoryComponent categoryList={categoryList} />
                </Col>
            </Row>

            <Row>
                {product?.map((product) => (
                    <Col key={product?.id} lg={3} md={4} xs={6}><ProductCard product={product} /></Col>
                ))}
            </Row>
        </Container>
    )
}

export default Category