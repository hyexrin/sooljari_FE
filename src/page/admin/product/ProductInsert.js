import React, { useState } from 'react';
import ProductService from '../service/ProductService';
import { Button, Form } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ProductInsert(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [proof, setProof] = useState('');
  const [area, setArea] = useState('');
  const [description, setDescription] = useState('');

  const changeNameHandler = (event) => {
    setName(event.target.value);
  }

  const changeImageHandler = (event) => {
    setImage(event.target.value);
  }

  const changePriceHandler = (event) => {
    setPrice(event.target.value);
  }

  const  changeProofHandler = (event) => {
    setProof(event.target.value);
  }

  const changeAreaHandler = (event) => {
    setArea(event.target.value);
  }

  const changeDescriptionHandler = (event) => {
    setDescription(event.target.value);
  }

  const createProduct = (event) => {
    console.log("createProduct")
    event.preventDefault();

    let product = {
      name: name,
      image: image,
      price: price,
      proof: proof,
      area: area,
      description: description
  }
  console.log(product.name);
  console.log("product => " + JSON.stringify(product));
  ProductService.createProduct(product).then(res => {
    props.history.push('/api/products');
  })
  navigate('/admin/product');
}
  
  const cancel = () => {
    props.history.push('/api/products');
  }

  const navigate = useNavigate();

  const product = () => {
    navigate('/admin/product')
  }
  return (
 <Container>
          <Form onSubmit={product}>
              <div><h1>상품 등록</h1></div>
      
              <Form.Group as={Row}>
                  <Col>
                      <Form.Label>이름</Form.Label>
                      <Form.Control type='text' placeholder='상품 이름' onChange={changeNameHandler}/>
                  </Col>
              </Form.Group>
      
              <Form.Group as={Row}>
                  <Col>
                      <Form.Label>이미지 URL</Form.Label>
                      <Form.Control type='file' placeholder='상품 이미지' onChange={changeImageHandler}/>
                  </Col>
              </Form.Group>
    
              <Form.Group as={Row}>
                  <Col>
                      <Form.Label>가격</Form.Label>
                      <Form.Control type='text' placeholder='상품 가격' onChange={changePriceHandler}/>
                  </Col>
              </Form.Group>
      
              <Form.Group as={Row}>
                  <Col>
                      <Form.Label>도수</Form.Label>
                      <Form.Control type='text' placeholder='상품 도수' onChange={changeProofHandler}/>
                  </Col>
              </Form.Group>
      
              <Form.Group as={Row}>
                  <Col>
                      <Form.Label>지역</Form.Label>
                      <Form.Control type='text' placeholder='상품 지역' onChange={changeAreaHandler}/>
                  </Col>
              </Form.Group>
      
              <Form.Group as={Row}>
                  <Col>
                      <Form.Label>설명</Form.Label>
                      <Form.Control type='text' placeholder='상품 설명' onChange={changeDescriptionHandler}/>
                  </Col>
              </Form.Group>

      
              <div>
                  <Button variant="secondary" type="submit" onClick={createProduct}>
                      상품 등록
                  </Button>
    
                  <Button variant="secondary" type="submit" onClick={cancel}>
                      취소
                  </Button>
              </div>
          </Form>
      </Container>
          
  );
}

export default ProductInsert;