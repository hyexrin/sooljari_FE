import React from 'react'
import BestProduct from '../component/BestProduct'
import Recommend from '../component/Recommend'

const main = ({ recommend, product }) => {

    return (
        <div className='main-box'>
            <div className='event-box'>
                <img src='http://localhost:30/images/realmain.png' className='event-img' />
            </div>

            <div className='recommend'>
                <Recommend recommend={recommend} product={product} />
                <BestProduct recommend={recommend} product={product} />
            </div>

        </div>

    )
}

export default main