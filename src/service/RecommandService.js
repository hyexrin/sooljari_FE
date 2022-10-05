import axios from 'axios';

const RECOMMANDATION_API_BASE_URL = "http://localhost:5000/"

class RecommandService {
    getRecommandation() {
        return axios.get(RECOMMANDATION_API_BASE_URL);
    }
}

export default new RecommandService();