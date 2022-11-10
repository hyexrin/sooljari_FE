import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import DatePicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import ko from 'date-fns/locale/ko';
import dayjs from 'dayjs';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { getDate, getDay, getMonth, getYear } from 'date-fns';
import { useEffect } from 'react';
import DateCalneder from '../../component/DateCalneder';
import RecommendProductCard from '../../component/RecommendProductCard';


export default function WriteCalendar({ product }) {

    const [ selectedCategory, setSelectedCategory ] = useState('');
    const [ click, setClick ] = useState(false);

    const selected = (e) => {
        setSelectedCategory(e.target.value);
    }

    const onClickTitle = () => {
        setClick(!click);
        
    }

    useEffect(()=>{
        console.log(selectedCategory);
        console.log(click);
    },[selectedCategory, click]);
    
    return (
        <Container className='write-calendar-box'>

            <Row className='write-calendar-date-box'>
                <Col><FontAwesomeIcon icon={faArrowLeft} /></Col>

                <Col><DateCalneder /></Col>

                <Col><FontAwesomeIcon icon={faPlus} /></Col>
            </Row>

            <Row>
                <h5 onClick={onClickTitle}>마신 술 종류</h5>
                <Button value={'탁주'} onClick={selected}>탁주</Button>
                <Button value={'과실주'} onClick={selected}>과실주</Button>
                <Button value={'약·청주'} onClick={selected}>약·청주</Button>
                <Button value={'증류주'} onClick={selected}>증류주</Button>
                {product?.map((product) => (
                    product?.category === selectedCategory
                    && <RecommendProductCard product={product}/>
                ))}
                
            </Row>

            <Row>
                <Col>맛에 대한 평가</Col>
            </Row>

            <Row>
                <Col>일기</Col>
            </Row>

        </Container>
    )
}
