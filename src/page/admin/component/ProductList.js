import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ProductList = ({product}) => {

  return (
    <Container>
      <h4>{product?.id} 상품</h4>
      <img src={product?.image} className='admin-product-img'/>
      <div>1{product?.name}</div>
      <div>2{product?.price}</div>
      <div>3{product?.proof}</div>
    </Container>
  )
}

export default ProductList