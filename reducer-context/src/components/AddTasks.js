import { useState } from "react";
import { useTasksDispatch } from "../context/TasksContext";

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();
    return (
        <>
            <input
                placeholder="Anyadir nueva tarea"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => {
                setText('');
                dispatch({
                    type: 'added',
                    id: nextId++,
                    text: text,
                });
            }}>Anyadir</button>
        </>
    );
}

let nextId = 3;
