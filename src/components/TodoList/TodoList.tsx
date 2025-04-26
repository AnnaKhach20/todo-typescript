import { TodoListProps } from '../../types/todoTypes';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = ({ todoItems, toggleCompletion, updateTask, deleteTask }: TodoListProps) => {
    return (
        <section className="todo-list-container">
            <ul className="todo-items-list">
                {todoItems?.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        toggleCompletion={toggleCompletion}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                    />
                ))}
            </ul>
        </section>
    );
};

export default TodoList;