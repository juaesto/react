import axios from "axios";
const API_URL = "https://localhost:44350/";

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "Authenticate", {
                Username: username,
                Password: password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem('token');
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('token'));
    }
}
export default new AuthService();