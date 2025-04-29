import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { clearCompleted } from '../../store/todoSlice';
import './TodoFooter.css';
import React from 'react';

const TodoFooter = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const dispatch = useDispatch();

    const completedTasks = todos.filter((todo) => todo.isCompleted).length;
    const totalTasks = todos.length;

    return (
        <footer className="todo-footer">
            <span className="todo-counter">
                Completed: {completedTasks} / {totalTasks}
            </span>
            {totalTasks > 0 && (
                <button onClick={() => dispatch(clearCompleted())} className="todo-clear-button">
                    Clear Completed
                </button>
            )}
        </footer>
    );
};

export default TodoFooter;