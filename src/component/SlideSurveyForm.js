import React from 'react'

export default function SlideSurveyForm({ surveyQuestions }) {

    return (
        <div className='survey-form-box'>
            <h2>{surveyQuestions.question}</h2>
            <div>
                <div>
                    {surveyQuestions.answer1}
                </div>
                <div>
                    {surveyQuestions.answer2}
                </div>
            </div>
        </div>
    )
}
