import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as blankHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import { useCookies } from 'react-cookie'
import axios from 'axios';

const ProductDetail = () => {
    let { id } = useParams();
    console.log("id? ", id);

    // 좋아요 기능 구현해보겠다는 발악
    // 혜린: 아낰ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 난 널 믿어 ^0^ ❤️
    const [like, setLike] = useState(false);
    const [userId, setUserId] = useState("");
    const [cookies, setCookie] = useCookies(["userEmail"]);

    useEffect(() =>{
        if(cookies.userEmail !== undefined) {
            setUserId(cookies.userEmail);
        }
    })

    // useEffect(async () => {
    //     const fetchData = async () => {
    //         const res = await axios.get(...)
    //         if (res.data.type === 'liked') setLike(true)
    //     }
    //     fetchData()
    // }, []);

    const toggleLike = async (e) => {

        setLike(!like);
        console.log(like);

        axios.post("http://localhost:8080/api/liked", {
            userId : userId,
            productId : id,
            liked : like? true : false
        });

    }

    // 발악 끝
    // 혜린: 머야 바로 끝난거여써?ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ

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

                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className='Detail-name-box'>

                            <div className='Dtail-like-box'>
                                상품ID : 00{id}
                                {like ? <FontAwesomeIcon icon={fullHeart} like={like} onClick={toggleLike} className='fullHeart' />
                                     : <FontAwesomeIcon icon={blankHeart} like={like} onClick={toggleLike} className='blankHeart' />}
                                {/* <div className='imgTest'>hello</div> */}
                            </div>
                            <hr />

                            {/* <h2><FontAwesomeIcon like={like} onClick={toggleLike} icon={blankHeart} className={like?'content-icon2':'content-icon'}/>{product?.name}</h2> */}
                            <h2>{product?.name}</h2>

                            <h3><FontAwesomeIcon icon={faStar} className='star-icon' />{product?.price}원</h3>
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