import axios from 'axios';

const RECOMMENDATION_API_BASE_URL = "http://localhost:5000/recommend"

class RecommendService {
    getRecommendation() {
        return axios.get(RECOMMENDATION_API_BASE_URL);
    }
}

export default new RecommendService();