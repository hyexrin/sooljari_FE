import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import RecommendData from '../../component/RecommendData'

const DataRecommend = ({ recommend }) => {

    return (
        <Container className='data-recommend-container'>

            <h1 className='data-recommend-title'>추천 데이터</h1>
            <Row>
                {recommend && recommend.map((product) => (
                    <Col key={product?.id} lg={3} md={4} xs={6}><RecommendData data={product} /></Col>
                ))}
            </Row>
            
        </Container>
    )
}

export default DataRecommend