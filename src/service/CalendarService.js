import axios from 'axios';

const CALENDAR_API_BASE_URL = "http://localhost:8080/api/calendars"

class CalnedarService {
    createCalendar(calendar) {
        return axios.post(CALENDAR_API_BASE_URL, calendar);
    }
}

export default new CalnedarService();