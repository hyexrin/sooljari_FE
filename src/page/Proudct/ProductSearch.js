import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import ProductCard from '../../component/ProductCard';


const ProductSearch = () => {
    const [searchData, setSearchData] = useState([]);
    const params = useParams();
    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        let serchQuery = query.get("q") || "";
        console.log("쿼리값은? ", serchQuery);
        async function fetchData() {
            const result = await axios.get(
                `http://localhost:8080/api/products/serach?${serchQuery}=` + params.word
            )
            console.log(result.data.result);
            setSearchData(result.data.result);
        };
        fetchData();
    }, [])
    return (
        <ProductCard product={searchData} />
    )
}

export default ProductSearch