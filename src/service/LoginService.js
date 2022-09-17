import axios from 'axios';

const LOGIN_API_BASE_URL = "http://localhost:8080/api/login";

class LoginService {
    getLogin() {
        return axios.get(LOGIN_API_BASE_URL);
    }

    login(login) {
        return axios.post(LOGIN_API_BASE_URL, login);
    }

}

export default new LoginService();
