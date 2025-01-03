import { RootState } from "@/redux/store";
import { v4 as uuidv4 } from 'uuid';
import { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
    tasks: ITask[];
    filter: 'all' | 'high' | 'medium' | 'low'
}
const initialState: InitialState = {
    tasks: [],
    filter: 'all',
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
      addTask: (state, action: PayloadAction<ITask>) => {
        const id = uuidv4()
        const data = {
          ...action.payload,
          id,
          isCompleted: false,
        };
        state.tasks.push(data);
      }
    }
})
export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}
export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;