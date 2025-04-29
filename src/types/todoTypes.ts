export interface Todo {
    userId?: number;
    id: number;
    task: string;
    isCompleted: boolean;
}

// export interface TodoHeaderProps {
//     addNewTask: (taskTitle: string) => void;
// }

// export interface TodoListProps {
//     todoItems?: Todo[];
//     toggleCompletion: (id: number, isCompleted: boolean) => void;
//     updateTask: (id: number, updatedTask: string) => void;
//     deleteTask: (id: number) => void;
// }

// export interface TodoItemProps extends Todo {
//     toggleCompletion: (id: number, isCompleted: boolean) => void;
//     updateTask: (id: number, updatedTask: string) => void;
//     deleteTask: (id: number) => void;
// }

// export interface TodoFooterProps {
//     todoItems: Todo[];
//     clearCompleted: () => void;
// }