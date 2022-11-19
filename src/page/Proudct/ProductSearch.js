import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams, useSearchParams } from 'react-router-dom'
import ProductCard from '../../component/ProductCard';
import Category from '../Category';


const ProductSearch = ({ product }) => {
    let { keyword } = useParams();
    console.log("keyword? ", keyword);
    // const [searchData, setSearchData] = useState([]);
    // const params = useParams();
    // const [query, setQuery] = useSearchParams();

    // useEffect(() => {
    //     let serchQuery = query.get("q") || "";
    //     console.log("쿼리값은? ", serchQuery);
    //     async function fetchData() {
    //         const result = await axios.get(
    //             `http://localhost:8080/api/products/serach?${serchQuery}=` + params.word
    //         )
    //         console.log(result.data.result);
    //         setSearchData(result.data.result);
    //     };
    //     fetchData();
    // }, [])
    return (
        <Container>
            
            <Row style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                "{keyword}"에 대한 검색 결과
            </Row>

<div>
            <Row>
                 {product?.map((product) => (
                    product?.name.includes(keyword) &&
                    <Col xs={6} key={product?.id} 
                    style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <ProductCard product={product}/>
                        </Col>
                ))}
            </Row>
            </div>
        </Container>
    )
}

export default ProductSearch