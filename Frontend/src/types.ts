export interface ITask {
    id: string,
    title: string,
    description: string,
    dueDate: string,
    isCompleted: boolean,
    assignTo: string | null,
    priority: 'high' | 'medium' | 'low',
}
export interface IUser {
    id: string,
    name: string,
}