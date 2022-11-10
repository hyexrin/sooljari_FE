import React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaRegLaughSquint } from 'react-icons/fa';
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

    var num = 0;
    // const userMbti = result;
    // console.log(userMbti.slice(0, 4))

    // console.log(productArr.length())
    // console.log(cnt)
    // const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
    // console.log(getRandom(0, 10));
    
    const mbti = [
        {type: 'ISTJ', sub: '사실이 중요! 믿음직한 현실주의자', num: 6}, 
        {type: 'ISTP', sub: '모든 종류의 도구를 내맘대로! 장인ST', num: 20},  
        {type: 'INFJ', sub: '차분하고 신기한 분위기, 이상주의자!', num: 11},  
        {type: 'INTJ', sub: '상상력이 풍부한 전략가!', num: 7},  
        {type: 'ISFJ', sub: '헌신적이고 따뜻한 수호자!', num: 17},  
        {type: 'ISFP', sub: '새로운 경험 추구, 매력적인 예술가', num: 15},  
        {type: 'INFP', sub: '선함 빼면 시체, 부드럽고 친절한 중재자', num: 5},  
        {type: 'INTP', sub: '끝없는 지식 갈망, 혁신적인 발명가', num: 10},  
        {type: 'ESTJ', sub: '사물과 사람 관리에 뛰어난 경영자!', num: 23},  
        {type: 'ESFP', sub: '즉흥적이고 에너지 폭발~ 연예인ST', num: 13},  
        {type: 'ENFP', sub: '열정!열정!열정! 창의적인 사교왕', num: 14},  
        {type: 'ENTP', sub: '지적 도전을 즐기는 영리한 사색가!', num: 22},  
        {type: 'ESFJ', sub: '인기 많은 배려왕, 이 구역 마당발~', num: 18},  
        {type: 'ESTP', sub: '넘치는 에너지, 뛰어난 관찰력의 사업가ST', num: 8},  
        {type: 'ENFJ', sub: '청중을 사로잡는 카리스마 넘치는 지도자!', num: 19},  
        {type: 'ENTJ', sub: '문제 해결 전문, 강한 의지의 지도자ST', num: 24} 
      ];
    console.log('mbti', mbti);
    console.log(mbti[0]);

    return (
        <Container className='survey-result-box'>

            <Row>

                <Col><h1 className='survey-result-title'>당신의 주BTI는!</h1></Col>
            </Row>

            <Row>
                {mbti.map((mbti) => (
                    mbti.type === result.slice(0, 4) ?
                    <div className='survey-result-title-sub'>{mbti.sub}</div> : ''
                ))}
                <Col><h1 className='survey-result-text'>{result.slice(0, 4)}</h1></Col>
            </Row>

            <Row>
                <Col xs={12}>어울리는 전통주 구경하러 Go</Col>
            </Row>

            <Row className='survey-result-product-row'>
                <div className='survey-result-product-box'>
                    <div className='survey-result-product-card'>
                        {/* {productArr[0].data.name}
                         <img src={productArr[0].data.image} /> */}

                         {mbti.map((mbti)=>(
                            mbti.type === result.slice(0, 4) ?
                            <ProductCard product={productArr[(mbti.num) - 1].data} /> : ''
                         ))}
                        
                    </div>
                </div>
            </Row>

            <Row className='survey-result-return-box'>
                <Col><button className='survey-result-return-btn' onClick={goToReturn}>다시하기</button></Col>
            </Row>
        </Container>
    )
}
