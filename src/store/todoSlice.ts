import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/todoTypes';

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },

    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        task: action.payload,
        isCompleted: false,
      };
      state.todos.push(newTodo);
    },

    toggleTodo: (state, action: PayloadAction<{id: number, isCompleted: boolean}>) => {
      const todo = state.todos.find(t => t.id === action.payload.id);
      if (todo) {
        todo.isCompleted = action.payload.isCompleted;
      }
    },

    updateTodo: (state, action: PayloadAction<{id: number, task: string}>) => {
      const todo = state.todos.find(t => t.id === action.payload.id);
      if (todo) {
        todo.task = action.payload.task;
      }
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    
    clearCompleted: (state) => {
      state.todos = state.todos.filter(todo => !todo.isCompleted);
    },
  },
});

export const { 
  setTodos, 
  addTodo, 
  toggleTodo, 
  updateTodo, 
  deleteTodo, 
  clearCompleted 
} = todoSlice.actions;

export default todoSlice.reducer;