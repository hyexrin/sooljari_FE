import React from 'react'
import DatePicker from 'react-datepicker'
import ko from 'date-fns/locale/ko'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { getDate, getDay, getMonth, getYear } from 'date-fns'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function DateCalneder() {

    const [date, setDate] = useState(new Date());
    const formatDate = (d) => {
        const date = new Date(d);
        const monthIndex = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}.${`0${monthIndex}`.slice(-2)}`;
    }

    useEffect(() => {
        // let Days = ['일', '월', '화', '수', '목', '금', '토'];
        let Year = getYear(date);
        let Month = getMonth(date) + 1;
        let Date = getDate(date);

        const selectedDate = Year + "-" + Month + "-" + Date;
        console.log('selected date: ', selectedDate);
    }, [date]);

    return (
        <DatePicker
            className='date-picker'
            selected={date}
            onChange={date => setDate(date)}
            locale={ko} dateFormat="yyyy년 MM월 dd일 (eeee)"
            showPopperArrow={false}
            disabledKeyboardNavigation
            highlightDates={new Date()}
            maxDate={new Date()}
            // customInput={
            //     <Form.Control as='textarea' rows={1} style={{width: '250px', textAlign: 'center'}} />
            // }
            inline={false} // 선택된 날짜 text창
            popperPlacement='auto' // 화면 중앙에 팝업 출현

            renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
                <Row>

                    <Col><FontAwesomeIcon icon={faChevronLeft} onClick={decreaseMonth} /></Col>
                    <Col className='calendar-date'>{formatDate(date)}</Col>
                    <Col onClick={dayjs(date).format('YY-MM') >= dayjs(new Date()).format('YY-MM') ? null : increaseMonth}>
                        {dayjs(date).format('YY-MM') >= dayjs(new Date()).format('YY-MM')
                            ?
                            <FontAwesomeIcon icon={faChevronRight} style={{ color: 'lightgray' }} />
                            : <FontAwesomeIcon icon={faChevronRight} />
                        }

                    </Col>
                </Row>)}
        />
    )
}
