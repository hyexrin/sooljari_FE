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
  const [category, setCategory] = useState('');

  const changeNameHandler = (event) => {
    setName(event.target.value);
  }

  const changeImageHandler = (event) => {
    setImage(event.target.value);
  }

  const changePriceHandler = (event) => {
    setPrice(event.target.value);
  }

  const changeProofHandler = (event) => {
    setProof(event.target.value);
  }

  const changeAreaHandler = (event) => {
    setArea(event.target.value);
  }

  const changeDescriptionHandler = (event) => {
    setDescription(event.target.value);
  }

  const changeCategoryHandler = (event) => {
    setCategory(event.target.value);
  }


  const createProduct = (event) => {
    console.log("createProduct")
    event.preventDefault();

    let product = {
      name: name,
      category: category,
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

  const PRODUCT_CATEGORY = [
    {id: '0', value: '카테고리를 선택해주세요.'},
    {id: '1', value: '탁주'},
    {id: '2', value: '약·청주'},
    {id: '3', value: '과실주'},
    {id: '4', value: '증류주'},
  ];

  return (
    <Container className='admin-product-list-box'>
      
      <Form onSubmit={product}>
        <div className='admin-product-list-title-box'><h1 className='admin-product-title'>상품 등록</h1></div>

        <Form.Group as={Row}>
          <Col className='admin-product-list-col'>
            <Form.Label>카테고리</Form.Label> <br/>
            {/* <Form.Control className='admin-product-list-input' type='text' placeholder='카테고리' onChange={changeCategoryHandler}/> */}
            <select onChange={changeCategoryHandler}>
              {PRODUCT_CATEGORY.map((category)=>(
                <option>{category.value}</option>
              ))}
            </select>
          </Col>
        </Form.Group>


        <Form.Group as={Row}>
          <Col className='admin-product-list-col'>
            <Form.Label>이름</Form.Label>
            <Form.Control className='admin-product-list-input' type='text' placeholder='상품 이름' onChange={changeNameHandler} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col className='admin-product-list-col'>
            <Form.Label>이미지 URL</Form.Label>
            {/* <Form.Control className='admin-product-list-input' type='file' placeholder='상품 이미지' onChange={changeImageHandler}/> */}
            <Form.Control className='admin-product-list-input' type='text' placeholder='상품 이미지' onChange={changeImageHandler} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col className='admin-product-list-col'>
            <Form.Label>가격</Form.Label>
            <Form.Control className='admin-product-list-input' type='text' placeholder='상품 가격' onChange={changePriceHandler} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col className='admin-product-list-col'>
            <Form.Label>도수</Form.Label>
            <Form.Control className='admin-product-list-input' type='text' placeholder='상품 도수' onChange={changeProofHandler} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col className='admin-product-list-col'>
            <Form.Label>지역</Form.Label>
            <Form.Control className='admin-product-list-input' type='text' placeholder='상품 지역' onChange={changeAreaHandler} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col className='admin-product-list-col'>
            <Form.Label>설명</Form.Label>
            <Form.Control className='admin-product-list-input' type='text' placeholder='상품 설명' onChange={changeDescriptionHandler} />
          </Col>
        </Form.Group>


        <div className='admin-product-list-button-box'>
          <Button variant="secondary" className='admin-product-list-button' type="submit" onClick={createProduct}>
            상품 등록
          </Button>

          <Button variant="secondary" className='admin-product-list-button' type="submit" onClick={cancel}>
            취소
          </Button>
        </div>
      </Form>
    </Container>

  );
}

export default ProductInsert;