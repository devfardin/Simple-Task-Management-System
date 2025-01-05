import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
    users: IUser[],
    filter: 'all',
}
const initialState: InitialState = {
    users: [
        {
            id: 'dhajrhejhr',
            name: 'Fardin Ahmed'
        }
    ],
    filter: 'all',
}
type draftUser = Pick<IUser, 'name'>

const creteUser = (userData: draftUser ) : IUser => {
    return {id: nanoid(), ...userData}
};

const userSlice =  createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            const userData = creteUser(action.payload);
            state.users.push(userData)
        }
    }
})
export const selectUsers = (state: RootState) => {
    return state.user.users
};

export const selectFilter = (state: RootState) => {
    return state.user.filter
}
export const { addUser } =userSlice.actions;

export default userSlice.reducer;