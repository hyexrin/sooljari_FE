import axios from 'axios';

const JOIN_API_BASE_URL = "http://localhost:8080/api/join";

class JoinService {
    getJoin() {
        return axios.get(JOIN_API_BASE_URL);
    }

    join(join) {
        return axios.post(JOIN_API_BASE_URL, join);
    }

}

export default new JoinService();
