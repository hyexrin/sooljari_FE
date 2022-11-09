import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import ProductCard from '../../component/ProductCard'
import RecommendData from '../../component/RecommendData'
import RecommendProductCard from '../../component/RecommendProductCard'

const DataRecommend = ({ recommend, product, userName }) => {

    return (
        <Container className='data-recommend-container'>


            <Row>
                <Row>
                    <Col className='data-recommend-sub'>🍶<b className='data-recommend-sub-user'>{userName}</b>님이 선택한 전통주🍶</Col>
                </Row>

                <Row>
                    <Col className=''><RecommendProductCard product={product[2]} /></Col>
                </Row>
            </Row>

            <h1 className='data-recommend-title'>취향저격 추천 전통주</h1>

            <Row>
                {recommend && recommend.map((product) => (
                    <Col key={product?.id} lg={3} md={4} xs={6}>
                        <ProductCard product={product} /></Col>
                ))}
            </Row>
            
        </Container>
    )
}

export default DataRecommend