import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
interface InitialState {
  tasks: ITask[];
  filter: 'all' | 'high' | 'medium' | 'low'
}
const initialState: InitialState = {
  tasks: [
    {
      id: "1",
      title: "Finish project report",
      description: "Complete the final report for the client project and submit it to the manager.",
      dueDate: "2025-01-05",
      isCompleted: false,
      priority: "high",
    },
    {
      id: "2",
      title: "Team meeting",
      description: "Discuss project updates and roadblocks with the team.",
      dueDate: "2025-01-03",
      isCompleted: true,
      priority: "medium",
    },
    {
      id: "3",
      title: "Code review",
      description: "Review the latest pull requests on GitHub and provide feedback.",
      dueDate: "2025-01-04",
      isCompleted: false,
      priority: "high",
    },
    {
      id: "4",
      title: "Buy groceries",
      description: "Purchase vegetables, fruits, and snacks for the week.",
      dueDate: "2025-01-02",
      isCompleted: false,
      priority: "low",
    },
    {
      id: "5",
      title: "Prepare presentation",
      description: "Create slides for the upcoming client presentation.",
      dueDate: "2025-01-06",
      isCompleted: false,
      priority: "high",
    },
    {
      id: "6",
      title: "Workout session",
      description: "Attend the gym for a cardio and strength training session.",
      dueDate: "2025-01-01",
      isCompleted: true,
      priority: "medium",
    },
    {
      id: "7",
      title: "Read a book",
      description: "Finish reading 'Atomic Habits' by James Clear.",
      dueDate: "2025-01-08",
      isCompleted: false,
      priority: "low",
    },
    {
      id: "8",
      title: "Prepare presentation",
      description: "Create slides for the upcoming client presentation.",
      dueDate: "2025-01-06",
      isCompleted: false,
      priority: "high",
    },
  ],
  filter: 'all',
}
type DraftTask = Pick<ITask, 'title' | 'description' | 'dueDate' | 'priority'>
const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData }
}
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload)
      state.tasks.push(taskData);
    },
    toggleIsCompleted: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) => task.id == action.payload ? (task.isCompleted = !task.isCompleted) : task)
    },
    delteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    filterTask: (state, action: PayloadAction<'all' | 'low' | 'medium' | 'high'>) => {
      state.filter = action.payload;
    }
  }
})
export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === 'all') {
    return state.todo.tasks
  } else {
    return state.todo.tasks.filter((task) => task.priority === filter)
  }
}
export const selectFilter = (state: RootState) => {
  return state.todo.filter
}
export const { addTask, toggleIsCompleted, delteTask, filterTask } = taskSlice.actions;

export default taskSlice.reducer;