import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {

  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${product.id}`);
  };


  return (
    <div className='ProductCard' onClick={showDetail} ket={product?.id}>
      
      <div className='productCard-img-box'>
        <img src={product?.image} className='productImg' />
      </div>
      
      <div className='wrapper'>
        <div className='productCard-title'>{product?.name}</div>
        <div className='productCard-price'>{product?.price}원</div>
      </div>

    </div>
  )
}

export default ProductCard