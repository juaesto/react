import axios from "axios";

const http = axios.create({
    baseURL: "http://universities.hipolabs.com",
    headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
    }
});

class BuscadorService {
    get(country: string) {
        return http.get('/search?country=' + country);
    }
}

export default new BuscadorService();