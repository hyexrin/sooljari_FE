import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import ProductCard from '../../component/ProductCard'
import RecommendData from '../../component/RecommendData'
import RecommendProductCard from '../../component/RecommendProductCard'

const DataRecommend = ({ product, userName }) => {

    const [ productId, setProductId ] = useState();
    const [ selected, setSelected ] = useState();
    const [ animation, setAnimation ] = useState(true);
    const [ recommendById, setRecommendById ] = useState("");

    const postProductId = (event, id) => {
        fetch(`/recommend?id=${productId}`)
            .then(res => res.json())
            .then(res => setRecommendById(res))
            .catch(() => {
            console.log('fail')
        })
    }

    console.log("productId: " + productId);

    useEffect(() => {
        postProductId();
        console.log(typeof (productId), recommendById, recommendArray);
    }, [productId], [setRecommendById]);

    const [recommendArray, setRecommendArray] = useState([]);

    const viewRecommendById = (recommendById) => {

        const count = Object.keys(recommendById).length;
        recommendArray.splice(0, count);
        console.log("count", count);
        for(var i = 0; i < count; i++) {
            const data = recommendById[i];
            setRecommendArray(recommendArray => [...recommendArray, data]);
        }
    }


    const onClickFlavorSweet = (e) => {
        setSelected(e.target.value);
        setAnimation(true);
    }

    const onClickFlavorLight = (e) => {
        setSelected(e.target.value);
        setAnimation(true);
    }

    const onClickFlavorSoft = (e) => {
        setSelected(e.target.value);
        setAnimation(true);
    }

    const onClickFlavorBitter = (e) => {
        setSelected(e.target.value);
        setAnimation(true);
    }

    const onClickFlavorClean = (e) => {
        setSelected(e.target.value);
        setAnimation(true);
    }

    const onClickFlavorSmell = (e) => {
        setSelected(e.target.value);
        setAnimation(true);
    }

    useEffect(() => {
        console.log("@@@@@" + selected)
    }, [selected])

    return (
        <Container className='data-recommend-container'>

            <Row className='data-recommend-1st-box'>
                <Row>
                    <Col className='data-recommend-sub'>🍶<b className='data-recommend-sub-user'>{userName}</b>님이 선택한 전통주🍶</Col>
                </Row>

                <Row style={{display: 'flex', justifyContent: 'center'}}>
                    <Row>
                        <Col xs={4}><Button className='write-calendar-category-btn' value='sweet' onClick={onClickFlavorSweet}>달달한</Button></Col>
                        <Col xs={4}><Button className='write-calendar-category-btn' value='light' onClick={onClickFlavorLight}>가벼운</Button></Col>
                        <Col xs={4}><Button className='write-calendar-category-btn' value='soft' onClick={onClickFlavorSoft}>부드러운</Button></Col>
                    </Row>
                    <Row>
                        <Col xs={4}><Button className='write-calendar-category-btn' value='bitter' onClick={onClickFlavorBitter}>쌉쌀한</Button></Col>
                        <Col xs={4}><Button className='write-calendar-category-btn' value='clean' onClick={onClickFlavorClean}>맑은</Button></Col>
                        <Col xs={4}><Button className='write-calendar-category-btn' value='smell' onClick={onClickFlavorSmell}>향이 있는</Button></Col>
                    </Row>
                </Row>

                <Row>
                    <Col className='' onClick={() => {setProductId(); setAnimation(!animation)}}><RecommendProductCard product={product[productId]} /></Col>
                </Row>

            </Row>

            <Row className='data-recommend-selected-box'>
                    {
                        animation && selected === 'sweet' && product.map((product) => (
                            product?.sweet
                                ? <Col xs={6} className='data-recommend-selected-col' onClick={() => {setProductId(product?.id - 1); viewRecommendById(recommendById); setAnimation(false)}} key={product?.id}><RecommendProductCard product={product} productId={productId} setProductId={setProductId} /></Col>
                                : ''
                        )) ||

                        animation && selected === 'light' && product.map((product) => (
                            product?.light
                                ? <Col xs={6} className='data-recommend-selected-col' onClick={() => {setProductId(product?.id - 1); viewRecommendById(recommendById); setAnimation(false)}} key={product?.id}><RecommendProductCard product={product} productId={productId} setProductId={setProductId} /></Col>
                                : ''
                        )) ||

                        animation && selected === 'soft' && product.map((product) => (
                            product?.soft
                                ? <Col xs={6} className='data-recommend-selected-col' onClick={() => {setProductId(product?.id - 1); viewRecommendById(recommendById); setAnimation(false)}} key={product?.id}><RecommendProductCard product={product} productId={productId} setProductId={setProductId} /></Col>
                                : ''
                        )) ||

                        animation && selected === 'bitter' && product.map((product) => (
                            product?.bitter
                                ? <Col xs={6} className='data-recommend-selected-col' onClick={() => {setProductId(product?.id - 1); viewRecommendById(recommendById); setAnimation(false)}} key={product?.id}><RecommendProductCard product={product} productId={productId} setProductId={setProductId} /></Col>
                                : ''
                        )) ||

                        animation && selected === 'clean' && product.map((product) => (
                            product?.clean
                                ? <Col xs={6} className='data-recommend-selected-col' onClick={() => {setProductId(product?.id - 1); viewRecommendById(recommendById); setAnimation(false)}} key={product?.id}><RecommendProductCard product={product} productId={productId} setProductId={setProductId} /></Col>
                                : ''
                        )) ||

                        animation && selected === 'smell' && product.map((product) => (
                            product?.smell
                                ? <Col xs={6} className='data-recommend-selected-col' onClick={() => {setProductId(product?.id - 1); viewRecommendById(recommendById); setAnimation(false)}} key={product?.id}><RecommendProductCard product={product} productId={productId} setProductId={setProductId} /></Col>
                                : ''
                        ))
                    }
                </Row>

           { !animation && <h1 className='data-recommend-title'>취향저격 추천 전통주</h1>}

            <Row>
                {!animation && recommendArray && recommendArray.map((product) => (
                    <Col key={product?.id} lg={3} md={4} xs={6}>
                        <ProductCard product={product} /></Col>
                ))}
            </Row>

        </Container>
    )
}

export default DataRecommend