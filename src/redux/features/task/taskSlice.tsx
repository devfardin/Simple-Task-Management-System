import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
    tasks: ITask[];
    filter: 'all' | 'High' | 'Medium' | 'Low'
}
const initialState: InitialState = {
    tasks: [
        {
            id: 1,
            title: "Finish project report",
            description: "Complete the final report for the client project and submit it to the manager.",
            dueDate: "2025-01-05",
            isCompleted: false,
            priority: "High",
          },
          {
            id: 2,
            title: "Team meeting",
            description: "Discuss project updates and roadblocks with the team.",
            dueDate: "2025-01-03",
            isCompleted: true,
            priority: "Medium",
          },
          {
            id: 3,
            title: "Code review",
            description: "Review the latest pull requests on GitHub and provide feedback.",
            dueDate: "2025-01-04",
            isCompleted: false,
            priority: "High",
          },
          {
            id: 4,
            title: "Buy groceries",
            description: "Purchase vegetables, fruits, and snacks for the week.",
            dueDate: "2025-01-02",
            isCompleted: false,
            priority: "Low",
          },
          {
            id: 5,
            title: "Prepare presentation",
            description: "Create slides for the upcoming client presentation.",
            dueDate: "2025-01-06",
            isCompleted: false,
            priority: "High",
          },
          {
            id: 6,
            title: "Workout session",
            description: "Attend the gym for a cardio and strength training session.",
            dueDate: "2025-01-01",
            isCompleted: true,
            priority: "Medium",
          },
          {
            id: 7,
            title: "Read a book",
            description: "Finish reading 'Atomic Habits' by James Clear.",
            dueDate: "2025-01-08",
            isCompleted: false,
            priority: "Low",
          },
          {
            id: 8,
            title: "Read a book",
            description: "Finish reading 'Atomic Habits' by James Clear.",
            dueDate: "2025-01-08",
            isCompleted: false,
            priority: "Low",
          },
    ],
    filter: 'all',
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})
export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}
export default taskSlice.reducer;