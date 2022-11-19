import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LoginOnlyCard from './LoginOnlyCard';
import ProductCard from './ProductCard';

const Recommend = ({recommend, product}) => {
    console.log(recommend);

    return (
        
        <div className='recommend-box' style={{marginBottom: '1rem'}}>

            <Container className='recommend-box-container'>

                <Row>
                    <Col><h3 className='recommend-title'><b>취향저격! AI 추천 술</b></h3> </Col>
                </Row>

                {recommend?.length !== 0 ? <Row>
                    {recommend && recommend.map((product) => (
                        <Col key={product?.id} lg={3} md={4} xs={6}>
                            <ProductCard product={product} /></Col>
                    ))}
                </Row> : <LoginOnlyCard />}
                
            </Container>

        </div>
    )
}

export default Recommend