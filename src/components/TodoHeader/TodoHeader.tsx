import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import './TodoHeader.css';

const TodoHeader = () => {
    const [taskInput, setTaskInput] = useState<string>("");
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (taskInput.trim()) {
            dispatch(addTodo(taskInput));
            setTaskInput("");
        }
    };

    return (
        <header className="todo-header-container">
            <h1 className="todo-app-title">Task Tracker</h1>
            <form onSubmit={handleSubmit} className="todo-input-form">
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    className="todo-task-input"
                    placeholder="Add a new task..."
                />
                <button type="submit" className="todo-add-button">
                    Add Task
                </button>
            </form>
        </header>
    );
};

export default TodoHeader;