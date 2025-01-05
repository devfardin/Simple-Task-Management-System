import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import { delteTask, toggleIsCompleted } from '@/redux/features/task/taskSlice'
import { selectUsers } from '@/redux/features/users/userSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { ITask } from '@/types'
import { Trash } from 'lucide-react'

interface IProps {
    task: ITask
}


const TaskCard = ({ task }: IProps) => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers);
    const assignUser = users.find((user) => user.id === task.assignTo )
    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                   <div className='flex gap-2 items-center'>
                   <div className={cn("size-3 rounded-full", {
                    "bg-green-500": task.priority === 'high', 
                    "bg-yellow-500": task.priority === 'medium', 
                    "bg-red-500": task.priority === 'low', 
                   })}></div>
                   <h1 className={cn('text-xl font-medium transition-all delay-300 text-neutral-600 dark:text-neutral-300 selection:bg-[#E0F5EF] selection:text-[#17B686]', { 'line-through transition-all delay-300' : task.isCompleted })}>{task?.title}</h1>
                   </div>
                   <h1>Assign to - { assignUser ? assignUser.name : 'No One' }</h1>

                    <p className='text-lg font-normal text-neutral-600 dark:text-neutral-300 selection:bg-[#E0F5EF] selection:text-[#17B686]'>
                        {task.description}
                    </p>
                </div>
                <div className="flex gap-3 items-center">
                    <Button onClick={()=> dispatch(delteTask(task.id))} variant='link' className="py-0 px-5 rounded-l-full rounded-r-full bg-red-500 text-neutral-100">
                        <Trash size={50} />
                    </Button>
                    <Checkbox
                      onClick={()=> dispatch(toggleIsCompleted(task.id))}
                   defaultChecked = {task.isCompleted}
                />
                </div>
            </div>
        </div>
    )
}

export default TaskCard
