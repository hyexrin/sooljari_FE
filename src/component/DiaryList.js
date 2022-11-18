import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
import RecommendProductCard from './RecommendProductCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

export default function DiaryList({ calendar, product }) {
  console.log(product)
  return (
    <Container className='diary-list-box'>

      <img src='http://localhost:30/images/diary-icon.png' className='diary-list-pin-icon'/>
      <Row className='diary-list-date'><Col>{calendar?.date}</Col></Row>


      <Row className='diary-list-content-box'>
        {product?.map((product) => (
          product?.id === calendar?.productId &&
          <Col xs={3} className='recommend-productCard-img-box'>
            <Col style={{fontSize: '1rem', lineHeight: '0.8rem', margin: '0.5rem 0', textAlign: 'center'}}>{product?.name}</Col>
            <img src={product?.image} className='recommend-productImg' />
            
          </Col>
        ))}

        <Col xs={9} className='diary-list-text'>
          <Row className='diary-list-comment-icon'></Row>
          <Row>📒{calendar?.diary}</Row>
        </Col>
      </Row>

    </Container>
  )
}
