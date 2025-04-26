import { useState } from 'react';
import { TodoHeaderProps } from '../../types/todoTypes';
import './TodoHeader.css';

const TodoHeader = ({ addNewTask }: TodoHeaderProps) => {
    const [taskInput, setTaskInput] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (taskInput.trim()) {
            addNewTask(taskInput);
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