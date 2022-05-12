import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`
});

export default apiClient;