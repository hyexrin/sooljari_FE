import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductDetail = () => {
    let { id } = useParams();
    console.log("id? ", id);

    const [product, setProduct] = useState(null);

    const getProductDetail = () => {
        fetch(`/api/products/${id}`)
            .then(res => res.json())
            .then(m => setProduct(m))
    }

    useEffect(() => {
        getProductDetail();
        console.log(product);
    }, [])

    return (
        <div className='Detail-div'>
            <Container className='Detail-box'>
                <Row>
                    <Col lg={6} xs={12}>
                        <div className='Detail-img-box'>
                            <img className='Detail-img' src={product?.image} />
                            {/* <div className='imgTest'>hello</div> */}
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className='Detail-name-box'>
                            <div>상품ID : 00{id}</div> <hr />
                            <h2>{product?.name}</h2>
                            <h3><FontAwesomeIcon icon={faStar} className='star-icon'/>{product?.price}원</h3>
                            <h3>도수: {product?.proof}%</h3> <hr />
                            <div>{product?.description}</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductDetail