import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ITask } from '@/types'
import { Trash2 } from 'lucide-react'
interface IProps {
    task: ITask
}

const TaskCard = ({ task }: IProps) => {
    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                   <div className='flex gap-2 items-center'>
                   <div className={cn("size-3 rounded-full", {
                    "bg-green-500": task.priority === 'High', 
                    "bg-yellow-500": task.priority === 'Medium', 
                    "bg-red-500": task.priority === 'Low', 
                   })}></div>
                   <h1 className='text-xl font-medium text-neutral-600 dark:text-neutral-300'>{task?.title}</h1>
                   </div>

                    <p className='text-lg font-normal text-neutral-600 dark:text-neutral-300'>
                        {task.description}
                    </p>
                </div>
                <div className="flex gap-3 items-center">
                    <Button variant='link' className="p-0 text-red-500">
                        <Trash2 />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard
