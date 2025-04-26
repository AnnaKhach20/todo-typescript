import { useEffect, useState } from 'react';
import { Todo } from './types/todoTypes';
import axios from 'axios';
import { TodoHeader, TodoList, TodoFooter } from './components';
import './App.css';

const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=15")
            .then((res) => {
                const fetchedTodos = res.data.map((todo: any) => ({
                    userId: todo.userId,
                    id: todo.id,
                    task: todo.title,
                    isCompleted: todo.completed
                }));
                setTodos(fetchedTodos);
            });
    }, []);

    const addNewTask = (taskTitle: string) => {
        setTodos(prev => [
            ...prev,
            {
                id: Date.now(),
                task: taskTitle,
                isCompleted: false
            }
        ]);
    };

    const toggleCompletion = (id: number, isCompleted: boolean) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, isCompleted } : todo
        ));
    };

    const updateTask = (id: number, updatedTask: string) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, task: updatedTask } : todo
        ));
    };

    const deleteTask = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.isCompleted));
    };

    return (
        <div className="todo-app-container">
            <TodoHeader addNewTask={addNewTask} />
            <TodoList 
                todoItems={todos} 
                toggleCompletion={toggleCompletion}
                updateTask={updateTask}
                deleteTask={deleteTask}
            />
            <TodoFooter 
                todoItems={todos} 
                clearCompleted={clearCompleted} 
            />
        </div>
    );
};

export default TodoApp;