import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {

  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${product.id}`);
  };


  return (
    <div className='ProductCard' onClick={showDetail} ket={product?.id} style={{zIndex: '0'}}>
      
      <div className='productCard-img-box'>
        <img src={product?.image} className='productImg' />
      </div>
      
      <div className='wrapper'>
        <div className='productCard-title'>{product?.name}</div> <br/>
        <div className='productCard-price'><FontAwesomeIcon icon={faStar} className='star-icon'/>{product?.price}원</div>
        

        <div className='productCard-description'>{product?.description}</div>
      </div>

    </div>
  )
}

export default ProductCard