import React from 'react'
import SlideSurveyForm from '../../component/SlideSurveyForm'
import { surveyQuestions } from '../../data/survey-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Survey() {

    const [cnt, setCnt] = useState(1);
    
    const [ mbtiType, setMbtiType ] = useState([]);

    var firstNum = 1
    var lastNum = Object.keys(surveyQuestions).length - 1

    // const ClickArrowRight = () => {
    //     console.log('arrow right click!')
    //     setCnt(cnt + 1)
    //     console.log(cnt)
    // }

    // const ClickArrowLeft = () => {
    //     console.log('arrow left click!')
    //     setCnt(cnt - 1)
    //     console.log(cnt)
    // }

    // cnt === 0 ? console.log('first') : console.log('not')



    return (
        <Container className='survey-box'>
            <Row>
                <h1 className='survey-title'>취향설문</h1>
            </Row>
            <Row className='survey-card-box'>
                <Col>
                    {surveyQuestions.map((surveyQuestions) => (
                        surveyQuestions.id === cnt &&
                        <SlideSurveyForm surveyQuestions={surveyQuestions} cnt={cnt} setCnt={setCnt} lastNum={lastNum}
                         mbtiType={mbtiType} setMbtiType={setMbtiType}/>
                    ))}
                </Col>
            </Row>

            {/* <Row className='survey-arrow-box'>
                <Col>
                    {cnt === firstNum ?
                        '' :
                        <div className='survey-answer-div' onClick={ClickArrowLeft}>
                            <FontAwesomeIcon icon={faArrowLeft} className='survey-arrow-icon' />
                        </div>
                    }
                </Col>

                <Col>
                    {cnt === lastNum ?
                        '' :
                        <div className='survey-answer-div' onClick={ClickArrowRight} >
                            <FontAwesomeIcon icon={faArrowRight} className='survey-arrow-icon' />
                        </div>
                    }

                </Col>
            </Row> */}

            
        </Container >
    )
}
