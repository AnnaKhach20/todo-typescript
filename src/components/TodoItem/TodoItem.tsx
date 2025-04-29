import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FiEdit, FiTrash2, FiCheck } from 'react-icons/fi';
import { toggleTodo, updateTodo, deleteTodo } from '../../store/todoSlice';
import './TodoItem.css';
import React from 'react';

const TodoItem = ({
    id,
    task,
    isCompleted,
}: { id: number, task: string, isCompleted: boolean }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);
    const dispatch = useDispatch();

    const handleUpdate = () => {
        if (editedTask.trim()) {
            dispatch(updateTodo({ id, task: editedTask }));
            setIsEditing(false);
        }
    };

    return (
        <li className={`todo-item ${isCompleted ? 'completed' : ''}`}>
            <div className="todo-item-content">
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => dispatch(toggleTodo({ id, isCompleted: !isCompleted }))}
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
                    onClick={() => dispatch(deleteTodo(id))}
                    className="todo-action-button delete"
                >
                    <FiTrash2 />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;