import React from 'react'

export default function SlideSurveyForm({ surveyQuestions, cnt, setCnt }) {

    const ClickArrowRight = () => {
        console.log('arrow right click!')
        setCnt(cnt + 1)
        console.log(cnt)
    }

    return (
        <div className='survey-form-box'>
            <h5>Q{surveyQuestions.id}</h5>
            <h5>{surveyQuestions.question}</h5>

            <div>
                <div className='survey-form-answer-box' onClick={ClickArrowRight}>
                    {surveyQuestions.answer1}
                </div>
                <div className='survey-form-answer-box' onClick={ClickArrowRight}>
                    {surveyQuestions.answer2}
                </div>
            </div>
        </div>
    )
}
