import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { sool } from '../../data/sool-data';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    let { id } = useParams();
    console.log("id? ", id);

    return (
        <div className='Detail-div'>
            <Container className='Detail-box'>
                <Row>
                    <Col lg={6} xs={12}><img className='Detail-img' src='https://tohomeimage.thehyundai.com/PD/PDImages/O/1/0/6/O02101008601_01.jpg?RS=720x864' /></Col>
                    <Col lg={6}>
                        <div>상품ID : 00{id}</div> <hr/>
                        <h1>주류 001</h1>
                        <h2>\13,000</h2>
                        <h3>12도</h3> <hr/>
                        <div>이 술은 ~</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductDetail