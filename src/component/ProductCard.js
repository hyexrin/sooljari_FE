import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {

    const navigate = useNavigate();

    const showDetail = () => {
      navigate(`/product/${product.id}`);
    };


  return (
    <div className='ProductCard' onClick={showDetail}>
        <img src={product?.img} className='productImg'/>
        <div>{product?.name}</div>
        <div>\{product?.price}</div>
    </div>
  )
}

export default ProductCard