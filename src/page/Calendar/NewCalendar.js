import React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import moment from 'moment/moment'
import { Col, Container, Row } from 'react-bootstrap'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faStar, faBottleDroplet } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import DiaryList from '../../component/DiaryList'

const NewCalendar = ({userName, calendar, product}) => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  //day
  // const dayjs = require('dayjs');
  const weekday = require('dayjs/plugin/weekday');
  const isoWeek = require('dayjs/plugin/isoWeek');
  const weekOfYear = require('dayjs/plugin/weekOfYear');
  const customParseFormat = require('dayjs/plugin/customParseFormat');

  // day extend
  dayjs.extend(weekday);
  dayjs.extend(isoWeek);
  dayjs.extend(weekOfYear);
  dayjs.extend(customParseFormat)

  const today = dayjs();
  const [viewDate, setViewDate] = useState(dayjs());
  const [selectDate, setSelectDate] = useState(dayjs());
  const test = dayjs('2022-11-2');
  const navigate = useNavigate('');
  const goToDiary = () => {
    navigate('/diary')
  }
  
  // userName data 구하기
  var resultArr = [];
  calendar?.map((calendar)=>(
     userName === calendar.userName &&
     resultArr.push(calendar)
   ))

  // console.log('new Calendar Result Arr >> ', dayjs(resultArr[0].date));

  // 날짜만 배열에 넣기
  var dateArr = []
  resultArr?.map((calendar) => (
    dateArr.push(dayjs(calendar?.date))
  ))
  console.log('date Arr >> ', dateArr);

  {resultArr?.map((calendar) => (
    <DiaryList key={calendar.id} calendar={calendar} /> 
))}

  const [diary, setDiary] = useState(dayjs());
const createCalendar = () => {
    const startWeek = viewDate.startOf('month').week();
    const endWeek = viewDate.endOf('month').week() === 1 ? 53 : viewDate.endOf('month').week();
    let calender = [];



    for (let week = startWeek; week <= endWeek; week++) {
      calender.push(
        <div className="row" key={week}>
          {Array(7).fill(0).map((n, i) => {
            let current = viewDate.startOf('week').week(week).add(n + i, 'day');
            if (viewDate.format('MM') === '12') {
              current = viewDate.startOf('week').week(week - 52).add(n + i, 'day');
            }

            console.log(viewDate.format('MM'))
            console.log(diary)
            // 현재 날짜 (기준)
            let isSelected = selectDate.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
            let isToday = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'today' : '';
            let isNone = current.format('MM') === viewDate.format('MM') ? '' : 'none';
            // let isTest = dateArr[1].format('YYYYMMDD') === current.format('YYYYMMDD') ? 'test' : '';
            // let isTest;
            // dateArr?.map((data) => (
            //   isTest = data.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'test' : ''
            // ))

            return (
              <>
              
                <div className={`box`} key={`${week}_${i}`} >
                  <div className={`text ${isSelected} ${isToday} ${isNone}`} onClick={() => { setSelectDate(current) }}>
              {dateArr?.map((data) => (
              data.format('YYYYMMDD') === current.format('YYYYMMDD') ? <FontAwesomeIcon style={{position: 'absolute', marginLeft: '5px', color: 'rgb(255, 174, 0)', transform: 'rotate(20deg)', height: '1rem'}} icon={faStar} /> : ''
            ))}
                    <span className={`day`} onClick={() => { setDiary(current.format('YYYY-M-D')); console.log(current.format('YYYY-M-D')) }}>{ current === dayjs('2022-11-9') ? '' : current.format('D')}</span>
                    {isToday ? (<span className="isToday">today</span>)
                      : isSelected ? (<span className="isSelected"></span>) : null}
                  </div>
                </div >
              </>
            )
          })
          }
        </div >
      )
      
    }
    return calender;
  }

  const changegeMonth = (date, changeString) => {
    switch (changeString) {
      case 'add':
        return setViewDate(viewDate.add(1, 'month'))
      case 'subtract':
        return setViewDate(viewDate.subtract(1, 'month'))
      default:
        return date;
    }
  }


  return (
    <Container className='new-calendar-box'>
      <StyledHeader>
        <Col xs={4} className='col'><FontAwesomeIcon icon={faChevronLeft} onClick={() => changegeMonth(viewDate, 'subtract')}/></Col>
        <Col xs={4} className="thisMonth">{viewDate.format("MM")}월</Col>
        <Col xs={4} className='col'><FontAwesomeIcon icon={faChevronRight} onClick={() => changegeMonth(viewDate, 'add')}/></Col>
      </StyledHeader>

      <StyledBody>
        <Row className='row week'>
          {days.map((day)=>(
            <Col key={day} className='box'><span className='text'>{day}</span></Col>
          ))}
        </Row>

        <Row>
          {createCalendar()}
        </Row>

        <Row className='new-calendar-diarylist-box'>
        {resultArr?.map((calendar) => (
          calendar?.date === diary &&
          <Col xs={12} md={6} lg={3} className='new-calendar-diarylist-col'><DiaryList key={calendar.id} calendar={calendar} product={product} /></Col>
          ))}
        </Row>
      </StyledBody>
    </Container>
  )
}

export default NewCalendar;


const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px;
  .thisMonth{
    font-weight: 700;
    color: #292929;
    line-height: 24px;
  }
  .col, .thisMonth{
    display: flex;
    justify-content: center;
  }
  button{
    width: 24px;
    margin: 0 8px;
  }
  .faChevronLeft_icon{
    width: 24px;
    height: 24px;   
    background: url(${faChevronLeft}) center  no-repeat;
  }
  .faChevronRight_icon{
    width: 24px;
    height: 24px;
    background: url(${faChevronRight}) center no-repeat;
  }
`;

const StyledBody = styled.div`
  text-align: center;
  margin: 20px 0;
  .row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 100%;
  }
  .row.week{
    height: 2rem;
    // margin-left: 1px;
    // border-bottom: 1px solid #E8E8E8;
  }
  .box{
    width: 32px;
    height: 32px;
    margin: 6px 6px;
    font-size: 14px;
  }
  .text{
    position: static;
    width: 32px;
    height: 32px;
    color: #292929;
  }
  .holiday,
  .grayed{
    color: #484848;
    pointer-events: none;
  }
  .day{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
  }
  .selected{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background : #A6A7CE;
    font-weight: 700;
    color: #fff;
  }
  .today{
    border-radius: 50%;
    font-weight: 500;
    /* color: pink; */
    background : rgb(255, 174, 0);
  }
  .test{
    border-radius: 50%;
    font-weight: 500;
    /* color: pink; */
    background : red;
  }
  .isSelected{
    position: relative;
    color: pink;
    font-size: 10px;
    font-weight: 400;
  }
  .isToday{
    position: relative;
    color: #292929;
    font-size: 10px;
    font-weight: 400;
  }
  .isTest{
    position: relative;
    color: red;
    font-size: 10px;
    font-weight: 400;
  }
  .none{
    display: none;
  }
`;

// export default function NewCaldendar() {

//   const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

//   //   const momentDate = moment('2020-12-30');
//   // momentDate.add(1, 'day'); //momentDate의 상태가 변경된다.
//   // console.log(momentDate.format('YYYY-MM-DD')); // '2020-12-31'

//   // const dayjsDate = dayjs('2020-12-30');
//   // dayjsDate.add(1, 'day'); //dayjsDate의 상태는 변경되지 않는다.
//   // console.log(dayjsDate.format('YYYY-MM-DD')) // '2020-12-30'

//   // //add 한 상태를 보고 싶다면 이렇게 사용 해야 한다.
//   // console.log(dayjsDate.add(1, 'day').format('YYYY-MM-DD')) // '2020-12-31'

//   // const dayjsAddDate = dayjsDate.add(1, 'day');
//   // console.log(dayjsAddDate.format('YYYY-MM-DD')) //'2020-12-31'

//   //day
//   const dayjs = require('dayjs');
//   const weekday = require('dayjs/plugin/weekday');
//   const isoWeek = require('dayjs/plugin/isoWeek');
//   const weekOfYear = require('dayjs/plugin/weekOfYear');

//   // day extend
//   dayjs.extend(weekday);
//   dayjs.extend(isoWeek);
//   dayjs.extend(weekOfYear);

//   let today = dayjs();

//   console.log('today', today);
//   const [ selectedDay, setSelectedDay ] = useState(dayjs(new Date()));

//   // < 달
//   let prevDay = selectedDay.add(-1, 'month');
//   let prevDate = dayjs(prevDay).daysInMonth();
//   console.log('지난달 >> ', prevDay.format('YY-MM'), '-', prevDate);

//   // 선택한 달
//   let nowDay = selectedDay;
//   let nowDate = dayjs(nowDay).daysInMonth();
//   console.log('선택한 달 >> ', nowDay.format('YY-MM'), '-', nowDate);
  
//   // > 달
//   let faChevronRightDay = selectedDay.add(1, 'month');
//   let faChevronRightDate = dayjs(faChevronRightDay).daysInMonth();
//   console.log('다음달 >> ', faChevronRightDay.format('YY-MM'), '-', faChevronRightDate);

//   const onClickLeft = () => {
//     setSelectedDay(selectedDay.add(-1, 'month'));
//   }

//   const onClickRight = () => {
//     setSelectedDay(selectedDay.add(1, 'month'));
//   }
//   return (
//     <Container>

//       {/* 년, 월 */}
//       <Row className='new-calendar-yymm-box'>
//         <Col className='new-calendar-yymm-Col' xs={4}><FontAwesomeIcon icon={faChevronLeft} onClick={onClickLeft}/></Col>
//         <Col className='new-calendar-yymm-Col' xs={4}>{selectedDay.format('YY년 MM월')}</Col>
//         <Col className='new-calendar-yymm-Col' xs={4}><FontAwesomeIcon icon={faChevronRight} onClick={onClickRight}/></Col>
//       </Row>

//       {/* 요일 */}
//       <Row>
//         {days.map((day) => (
//           <Col className='new-calendar-day-Col' key={day}>{day}</Col>
//         ))}
//       </Row>
      
//       {/* 일 */}
//       <Row>
//           {/* {nowDay.map((day)=>(
//               <Col>{selectedDay.format('DD')}</Col>
//           ))} */}
//       </Row>
//     </Container>
//   )
// }
