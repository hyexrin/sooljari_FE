import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function SlideSurveyForm({ surveyQuestions, cnt, setCnt, lastNum, mbtiType, setMbtiType }) {

    var [num, setNum] = useState(lastNum);

    const ClickAnswerOne = () => {
        if (cnt !== lastNum) {
            setCnt(cnt + 1)
        } else {
            setNum(num + 1);
        }
        setMbtiType(mbtiType + surveyQuestions.answer1.type)
    }

    const ClickAnswerTwo = () => {
        if (cnt !== lastNum) {
            setCnt(cnt + 1)
        } else {
            setNum(num + 1);
        }
        setMbtiType(mbtiType + surveyQuestions.answer2.type)
    }

    useEffect(() => {
        console.log('mbtiType', mbtiType)
    }, [mbtiType]);

    // 결과값 전달
    const navigate = useNavigate('');
    const goToReulst = () => {

        if (mbtiType.length >= 4) {
            navigate('/result', { state: { result: mbtiType } });
        } else {
            Swal.fire({
                icon: "error",
                // title: "⚠️",
                text: '아직 선택하지 않은 항목이 있어요😿',
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            }).then((res) => {
                /* Read more about isConfirmed, isDenied below */
                if (res.isConfirmed) {
                    //삭제 요청 처리
                }
                else {
                    //취소
                }
            });
        }
    }

    return (
        <div className='survey-form-box'>

            {num === lastNum &&
                <div className='survey-form-question-box'>
                    <div className='survey-form-questioin-num'>
                        Q{surveyQuestions.id}
                    </div>

                    <div className='survey-form-question'>
                        {surveyQuestions.question}
                    </div>

                    <div>
                        <div className='survey-form-answer-box' onClick={ClickAnswerOne}>
                            {surveyQuestions.answer1.answer}
                        </div>
                        <div className='survey-form-answer-box' onClick={ClickAnswerTwo}>
                            {surveyQuestions.answer2.answer}
                        </div>
                    </div>
                </div>

            }

            <div className='survey-form-result-box'>
                <br /><br />
                {num > lastNum ?
                    <div onClick={goToReulst}>
                        <u>👉결과 확인하기!</u>
                    </div> :
                    ''
                }
            </div>

            <div>
                <img className='survey-form-img' src='https://cdn-icons-png.flaticon.com/512/2633/2633876.png' />
            </div>
        </div>
    )
}
