import { TodoFooterProps } from '../../types/todoTypes';
import './TodoFooter.css';

const TodoFooter = ({ todoItems, clearCompleted }: TodoFooterProps) => {
    const completedTasks = todoItems.filter((todo) => todo.isCompleted).length;
    const totalTasks = todoItems.length;

    return (
        <footer className="todo-footer">
            <span className="todo-counter">
                Completed: {completedTasks} / {totalTasks}
            </span>
            {totalTasks > 0 && (
                <button onClick={clearCompleted} className="todo-clear-button">
                    Clear Completed
                </button>
            )}
        </footer>
    );
};

export default TodoFooter;