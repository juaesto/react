import axios from "axios";

function authHeader() {
    const token = localStorage.getItem('token');
    if (token) {
        return 'Bearer ' + token;
    }
    return null;
}

export default axios.create({
    baseURL: "https://localhost:44350/",
    headers: { 
        "Accept": "application/json",
        "Content-type": "application/json",
        "Authorization": authHeader()
    }
});

