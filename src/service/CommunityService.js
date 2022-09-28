import axios from "axios";

const COMUNITY_API_BASE_URL = "http://localhost:8080/api/community"

class CommunityService {
    createCommunity(community) {
        return axios.post(COMUNITY_API_BASE_URL, community);
    }
}

export default new CommunityService();