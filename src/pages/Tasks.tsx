import Container from "@/components/layout/Container";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddTaskModal from "@/module/tasks/AddTaskModal";
import TaskCard from "@/module/tasks/TaskCard";
import { filterTask, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  return (
    <Container>
      <div className="mt-5 bg-neutral-300 p-3 mb-6 rounded-lg 
      flex justify-end items-center gap-5">
        <h1 className="font-medium mr-auto text-neutral-600 text-xl selection:bg-[#E0F5EF] selection:text-[#17B686]">All Task</h1>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger onClick={() => dispatch(filterTask('all'))} value="all">All</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(filterTask('high'))} value="high">High</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(filterTask('medium'))} value="medium">Medium</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(filterTask('low'))} value="low">Low</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-2">
        {
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        }
      </div>
    </Container>
  )
}

export default Tasks
