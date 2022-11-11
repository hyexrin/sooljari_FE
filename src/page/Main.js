import React from 'react'
import Recommend from '../component/Recommend'


const main = ({product}) => {
    return (
        <div className='main-box'>
            <div className='event-box'>
                <img src='http://localhost:30/images/realmain.png' className='event-img'/>
            </div>

            <div className='recommend'>
                <Recommend product={product}/>
            </div>

        </div>

    )
}

export default main