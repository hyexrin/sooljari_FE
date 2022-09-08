import React, { Component } from 'react'
import ProductService from '../service/ProductService'
import { Button, Form } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'

export default class Test extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //       name: '',
  //       image: '',
  //       price: '',
  //       proof: '',
  //       area: '',
  //       description: ''
  //   }

  //   this.changeNameHandler = this.changeNameHandler.bind(this);
  //   this.changeImageHandler = this.changeImageHandler.bind(this);
  //   this.changePriceHandler = this.changePriceHandler.bind(this);
  //   this.changeProofHandler = this.changeProofHandler.bind(this);
  //   this.changeAreaHandler = this.changeAreaHandler.bind(this);
  //   this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
  //   this.createProduct = this.createProduct.bind(this);
  // }

  // changeNameHandler = (event) => {
  //   this.setState({name: event.target.value});
  // }

  // changeImageHandler = (event) => {
  //   this.setState({image: event.target.value});
  // }

  // changePriceHandler = (event) => {
  //   this.setState({price: event.target.value});
  // }

  // changeProofHandler = (event) => {
  //   this.setState({proof: event.target.value});
  // }

  // changeAreaHandler = (event) => {
  //   this.setState({area: event.target.value});
  // }

  // changeDescriptionHandler = (event) => {
  //   this.setState({description: event.target.value});
  // }

  // createProduct = (event) => {
  //   event.preventDefault();
  //   let product = {
  //       name: this.state.name,
  //       image: this.state.image,
  //       price: this.state.price,
  //       proof: this.state.proof,
  //       area: this.state.area,
  //       description: this.state.description
  //   };
  //   console.log("product => " + JSON.stringify(product));
  //   ProductService.createProduct(product).then(res => {
  //       this.props.history.push('/api/products');
  //   });
  // }
  
  // cancel() {
  //   this.props.history.push('/api/products');
  // }
  
    render() {
    return (
      <div>
        hello
      </div>
    //     <Container>
    //     <Form>
    //         <div><h1>상품 등록</h1></div>
    
    //         <Form.Group as={Row}>
    //             <Col>
    //                 <Form.Label>이름</Form.Label>
    //                 <Form.Control type='text' placeholder='상품 이름' value={this.state.name} onChange={this.changeNameHandler}/>
    //             </Col>
    //         </Form.Group>
    
    //         <Form.Group as={Row}>
    //             <Col>
    //                 <Form.Label>이미지 URL</Form.Label>
    //                 <Form.Control type='text' placeholder='상품 이미지' value={this.state.image} onChange={this.changeImageHandler}/>
    //             </Col>
    //         </Form.Group>

    //         <Form.Group as={Row}>
    //             <Col>
    //                 <Form.Label>가격</Form.Label>
    //                 <Form.Control type='text' placeholder='상품 가격' value={this.state.price} onChange={this.changePriceHandler}/>
    //             </Col>
    //         </Form.Group>
    
    //         <Form.Group as={Row}>
    //             <Col>
    //                 <Form.Label>도수</Form.Label>
    //                 <Form.Control type='text' placeholder='상품 도수' value={this.state.proof} onChange={this.changeProofHandler}/>
    //             </Col>
    //         </Form.Group>
    
    //         <Form.Group as={Row}>
    //             <Col>
    //                 <Form.Label>지역</Form.Label>
    //                 <Form.Control type='text' placeholder='상품 지역' value={this.state.area} onChange={this.changeAreaHandler}/>
    //             </Col>
    //         </Form.Group>
    
    //         <Form.Group as={Row}>
    //             <Col>
    //                 <Form.Label>설명</Form.Label>
    //                 <Form.Control type='text' placeholder='상품 설명' value={this.state.description} onChange={this.changeDescriptionHandler}/>
    //             </Col>
    //         </Form.Group>
    
    //         <div>
    //             <Button variant="secondary" type="submit" onClick={this.createProduct}>
    //                 상품 등록
    //             </Button>

    //             <Button variant="secondary" type="submit" onClick={this.cancel.bind(this)}>
    //                 취소
    //             </Button>
    //         </div>
    //     </Form>
    // </Container>
    )
  }
}
