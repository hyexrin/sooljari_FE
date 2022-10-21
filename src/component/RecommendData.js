import React from 'react';
import { Container } from 'react-bootstrap';

function RecommendData({ data }) {
    return (
        <Container className='data-recommendCard-box'>
            <div>이름: {data?.name}</div>
            <div>종류: {data?.class}</div>
            <div>카테고리: {data?.category}</div>
            <div>도수: {data?.percent}</div>
            <div>나라: {data?.origin}</div>
            <ul className='data-recommendCard-tasty-ul'>맛
                {data?.sweet ? <li>sweet</li> : null}
                {data?.light ? <li>light</li> : null}
                {data?.soft ? <li>soft</li> : null}
                {data?.bitter ? <li>bitter</li> : null}
                {data?.clean ? <li>clean</li> : null}
                {data?.smell ? <li>smell</li> : null}
               
                {/* <div>sweet: {data?.sweet}</div>
                <div>light: {data?.light}</div>
                <div>soft: {data?.soft}</div>
                <div>bitter: {data?.bitter}</div>
                <div>clean: {data?.clean}</div>
                <div>smell: {data?.smell}</div> */}
            </ul>

        </Container>
    );
}

export default RecommendData;