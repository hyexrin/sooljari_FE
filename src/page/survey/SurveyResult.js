import React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom'
import ProductCard from '../../component/ProductCard';

export default function SurveyResult({ product }) {
    const location = useLocation();
    console.log('state', location.state.result);

    const result = location.state.result;

    const productArr = [];

    // const [ cnt, setCnt ] = useState(0);

    product.map((data) => {
        productArr.push({ data });
        console.log(data.name);
    })
    console.log("productArr", productArr)
    const navigate = useNavigate('');

    const goToReturn = () => {
        navigate('/survey');
    }

    // console.log(productArr.length())
    // console.log(cnt)
    // const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
    // console.log(getRandom(0, 10));

    return (
        <Container className='survey-result-box'>

            <Row>

                <Col><h1 className='survey-result-title'>당신의 주BTI는!</h1></Col>
            </Row>

            <Row>
                {/* <h1 className='survey-result-text'>{result.slice(0, 4)}</h1> */}
                <Col><h1 className='survey-result-text'>ENFP</h1></Col>
            </Row>

            <Row>
                <Col xs={12}>어울리는 전통주는 구경하러 Go</Col>
            </Row>

            <Row>
                <div className='survey-result-product-box'>
                    <div className='survey-result-product-card'>
                        {/* {productArr[0].data.name}
                         <img src={productArr[0].data.image} /> */}
                        <ProductCard product={productArr[3].data} />
                    </div>
                </div>
            </Row>

            <Row className='survey-result-return-box'>
                <Col><button className='survey-result-return-btn' onClick={goToReturn}>다시하기</button></Col>
            </Row>
        </Container>
    )
}
