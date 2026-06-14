import { create } from 'zustand';
import { generatedId } from '../helpers';

type Task = {
  id: string;
  title: string;
  createdAt: number;
};

type TodoStore = {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
};

export const useToDoStore = create<TodoStore>((set) => ({
  tasks: [],
  createTask: (title) => {
    const newTask = {
      id: generatedId(),
      title,
      createdAt: Date.now(),
    };

    set((state) => ({ tasks: [newTask, ...state.tasks] }));
  },
  updateTask: (id, title) => {
    set((state) => ({
      tasks: state.tasks.map((task) => (task.id === id ? { ...task, title } : task)),
    }));
  },
  removeTask: (id) => {
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) }));
  },
}));
