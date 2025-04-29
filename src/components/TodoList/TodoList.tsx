import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import { RootState } from '../../store/store';
import React from 'react';
import './TodoList.css';

const TodoList = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);

    return (
        <section className="todo-list-container">
            <ul className="todo-items-list">
                {todos?.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                    />
                ))}
            </ul>
        </section>
    );
};

export default TodoList;