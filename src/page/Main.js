import React from 'react'
import Recommend from '../component/Recommend'

const main = () => {
    return (
        <div className='main-box'>
            <div className='event-box'>
                <img src='https://cdn.pixabay.com/photo/2016/11/29/15/05/drink-1870139_960_720.jpg' className='event-img'/>
            </div>

            <div className='recommend'>
                <Recommend />
            </div>

        </div>

    )
}

export default main