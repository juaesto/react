import apiClient from './api';

const getUsers = () => apiClient.get("/users");

export default {
    getUsers
};