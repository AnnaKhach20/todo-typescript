import { useState } from 'react';
import React from 'react';
import { TodoItemProps } from '../../types/todoTypes';
import { FiEdit, FiTrash2, FiCheck } from 'react-icons/fi';
import './TodoItem.css';

const TodoItem = ({
    id,
    task,
    isCompleted,
    toggleCompletion,
    updateTask,
    deleteTask,
}: TodoItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);

    const handleUpdate = () => {
        if (editedTask.trim()) {
            updateTask(id, editedTask);
            setIsEditing(false);
        }
    };

    return (
        <li className={`todo-item ${isCompleted ? 'completed' : ''}`}>
            <div className="todo-item-content">
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => toggleCompletion(id, !isCompleted)}
                    className="todo-checkbox"
                />
                {isEditing ? (
                    <input
                        type="text"
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                        className="todo-edit-input"
                        autoFocus
                    />
                ) : (
                    <span
                        className="todo-task-text"
                        onDoubleClick={() => setIsEditing(true)}
                    >
                        {task}
                    </span>
                )}
            </div>
            <div className="todo-item-actions">
                {isEditing ? (
                    <button onClick={handleUpdate} className="todo-action-button">
                        <FiCheck />
                    </button>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="todo-action-button"
                        disabled={isCompleted}
                    >
                        <FiEdit />
                    </button>
                )}
                <button
                    onClick={() => deleteTask(id)}
                    className="todo-action-button delete"
                >
                    <FiTrash2 />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;