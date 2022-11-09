import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';

export default function RecommendProductCard({ product }) {

    const navigate = useNavigate();

    const showDetail = () => {
      navigate(`/product/${product.id}`);
    };

    console.log(product)
    
  return (
    <Container className='recommend-ProductCard' onClick={showDetail} ket={product?.id}>

      <div className='recommend-productCard-img-box'>
        <img src={product?.image} className='recommend-productImg' />
      </div>
      

      <div className='wrapper'>
        <div className='recommend-productCard-title'>{product?.name}</div>
        <div className='recommend-productCard-description'>{product?.description}</div>
      </div>

      <div className='recommend-productCard-flavor-chart'>

      </div>

    </Container>
  )
}
