import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/api/products"

class ProductService {
    createProduct(product) {
        return axios.post(PRODUCT_API_BASE_URL, product);
    }
}

export default new ProductService();