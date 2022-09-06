import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { sool } from '../data/sool-data';
import ProductCard from './ProductCard';

const Recommend = ({product}) => {

    return (
        <div className='recommend-box'>

            <Container className='recommend-box-container'>

                <Row>
                    <Col><h3 className='recommend-title'><b>취향저격! AI 추천 술</b></h3> </Col>
                </Row>

                <Row>
                    {product?.map((product) => (
                        <Col key={product?.id} lg={3} md={4} xs={6}><ProductCard product={product} /></Col>                        
                    ))}
                </Row>

            </Container>

        </div>
    )
}

export default Recommend