import Container from "@/components/layout/Container";
import AddTaskModal from "@/module/tasks/AddTaskModal";
import TaskCard from "@/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  return (
    <Container>
      <div className="mt-5 flex justify-between items-center">
        <h1 className="font-medium text-neutral-500 text-xl selection:bg-[#E0F5EF] selection:text-[#17B686]">All Task</h1>
        <AddTaskModal/>
      </div>
      <div className="space-y-5 mt-2">
        {
          tasks.map((task, index) => <TaskCard key={index} task={task}/>)
        }
      </div>
    </Container>
  )
}

export default Tasks
