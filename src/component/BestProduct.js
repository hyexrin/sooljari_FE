import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

export default function BestProduct({recommend, product}) {
    return (

        <div className='recommend-box'>

            <Container className='recommend-box-container'>

                <Row>
                    <Col><h3 className='recommend-title'><b>술자리 MD Pick!</b></h3> </Col>
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
