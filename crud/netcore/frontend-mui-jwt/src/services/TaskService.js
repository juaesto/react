import http from "./HttpService";

class TaskService {
    async getAll() {
        return await http.get("/DailyTask");
    }

    get(id) {
        return http.get(`/DailyTask/${id}`);
    }

    create(data) {
        return http.post("/DailyTask", data);
    }

    update(data, id) {
        return http.put(`/DailyTask/${id}`, data);
    }

    delete(id) {
        return http.delete(`/DailyTask/${id}`);
    }

    deleteAll() {
        return http.delete(`/DailyTask`);
    }
}

export default new TaskService();