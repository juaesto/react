import http from "./http.service";
import ITask from "../types/task.type";

class TaskService {
    async getAll() {
        return await http.get<Array<ITask>>("/tasks");
    }

    get(id: string) {
        return http.get<ITask>(`/tasks/${id}`);
    }

    create(data: ITask) {
        return http.post<ITask>("/tasks", data);
    }

    update(data: ITask, id: any) {
        return http.put<any>(`/tasks/${id}`, data);
    }

    delete(id: any) {
        return http.delete<any>(`/tasks/${id}`);
    }

    deleteAll() {
        return http.delete<any>(`/tasks`);
    }
}

export default new TaskService();