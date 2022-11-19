import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus, faChevronDown, faChevronRight, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
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
import CalendarService from '../../service/CalendarService';
import { useLocation, useNavigate } from 'react-router-dom';


export default function WriteCalendar(props) {

    const product = props.product;

    const location = useLocation();
    const user = location.state.userName
    console.log('state', user);

    const navigate = useNavigate('');

    // calendar CRUD 연결
    const [diary, setDiary] = useState('');

    const chnageDiaryHandler = (e) => {
        setDiary(e.target.value);
    }

    const createCalendar = (e) => {
        console.log("createCalnedar");
        e.preventDefault();

        let calendar = {
            userName : user,
            date: selectedDate,
            productId: Number(selectedItems.product?.id),
            diary: diary
        }
        console.log(calendar.date + calendar.userName);
        console.log("calendar => " + JSON.stringify(calendar));
        CalendarService.createCalendar(calendar).then(res => {
            props.history.push('/api/calendars')
        })
        navigate('/mypage')
    }

    ///
    const [selectedCategory, setSelectedCategory] = useState('');
    const [click, setClick] = useState(true);
    const [selectedDate, setSelectedDate] = useState('');
    console.log('writeCalendar >> ', selectedDate);

    const selected = (e) => {
        setSelectedCategory(e.target.value);
    }

    const onClickTitle = () => {
        setClick(!click);
    }

    const [selectedItems, setSelectedItems] = useState([]);
    // var selectedItems = [];

    useEffect(() => {
        console.log(selectedCategory);
        console.log(click);
        console.log(selectedItems);
    }, [selectedCategory, click, selectedItems]);

    return (
        <Container className='write-calendar-box'>
                
            <Row><FontAwesomeIcon icon={faPenToSquare} style={{height: '1.5rem', color: 'hsl(239, 29%, 60%)'}}/></Row>

            <Row className='write-calendar-date-box' style={{ width: '100%' }}>
                <Col xs={1}><FontAwesomeIcon icon={faArrowLeft} /></Col>
                <Col><DateCalneder setSelectedDate={setSelectedDate}/></Col>
                <Col xs={1}><FontAwesomeIcon icon={faPlus} onClick={createCalendar}/></Col>
            </Row>

            <Row onClick={onClickTitle} style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                {click
                    ? <Col xs={1}><FontAwesomeIcon icon={faChevronDown} /></Col>
                    : <Col xs={1}><FontAwesomeIcon icon={faChevronRight} /></Col>}
                <Col><h5>기록할 전통주🍶</h5></Col>
                <Col xs={1}></Col>
            </Row>

            <Row style={{width: '100%'}}>
            {product?.map((product) => (
                            product?.id === selectedItems.product?.id &&
                            <Row key={product?.id} style={{ margin: '5px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Col onClick={()=>{setSelectedItems([])}}><img src={product?.image} style={{ width: '5rem', borderRadius: '15px', justifyContent: 'flex-end', alignItems: 'flex-end' }} /></Col>
                                <Col>{product?.name}</Col>
                            </Row>
                        ))}
            </Row>
            
            {click &&
                <>
                    <Row style={{ width: '100%' }}>
                        <Col xs={3}><Button className='write-calendar-category-btn' value={'탁주'} onClick={selected}>탁주</Button></Col>
                        <Col xs={3}><Button className='write-calendar-category-btn' value={'과실주'} onClick={selected}>과실주</Button></Col>
                        <Col xs={3}><Button className='write-calendar-category-btn' value={'약·청주'} onClick={selected}>약·청주</Button></Col>
                        <Col xs={3}><Button className='write-calendar-category-btn' value={'증류주'} onClick={selected}>증류주</Button></Col>
                    </Row>

                    <Row>
                        {product?.map((product) => (
                            product?.category === selectedCategory
                            &&
                            <Row key={product?.id} style={{ margin: '5px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Col><img onClick={() => {console.log('product @@@', product); setSelectedItems({product}); setClick(false); console.log('selectedItems.id >> ', selectedItems.product?.id)}} src={product?.image} style={{ width: '5rem', borderRadius: '15px', justifyContent: 'flex-end', alignItems: 'flex-end' }} /></Col>
                                <Col>{product?.name}</Col>
                            </Row>
                        ))}
                    </Row>
                </>
            }

            <Row style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'space-between', marginTop: '3rem' }}>
                {/* <Col xs={1}><FontAwesomeIcon icon={faChevronRight} /></Col> */}
                <Col><h5>나의 주류 기록📒</h5></Col>
                {/* <Col xs={1}></Col> */}
                <textarea style={{ resize: 'none' }} onChange={chnageDiaryHandler} class='write-calendar-daily-note' placeholder='ex) 달달한 맛과 향에 오늘 먹은 안주와 넘나 찰떡!'/>
            </Row>

        </Container>
    )
}