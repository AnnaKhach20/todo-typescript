import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { TodoHeader, TodoList, TodoFooter } from './components';
import { RootState, AppDispatch } from './store/store';
import { setTodos } from './store/todoSlice';
import './App.css';
import React from 'react';

const TodoApp = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=15")
      .then((res) => {
        const fetchedTodos = res.data.map((todo: any) => ({
          userId: todo.userId,
          id: todo.id,
          task: todo.title,
          isCompleted: todo.completed
        }));
        dispatch(setTodos(fetchedTodos));
      });
  }, [dispatch]);

  return (
    <div className="todo-app-container">{}
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </div>
  );
};

export default TodoApp;