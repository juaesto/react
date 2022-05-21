import { useTasksDispatch } from "../context/TasksContext";

export function Task({ task }) {
    const dispatch = useTasksDispatch();

    return (
        <div>
            <span style={{ marginRight: '20px' }}>{task.text}</span>
            <button onClick={() => {
                dispatch({
                    type: 'deleted',
                    id: task.id
                });
            }}>
                Borrar
            </button>
        </div>
    );
}
