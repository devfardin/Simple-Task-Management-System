import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addUser } from "@/redux/features/users/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { IUser } from "@/types";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

function AddUserModal() {
  const form = useForm();
  const dispatch = useAppDispatch()
  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(addUser(data as IUser));
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-neutral-600">Add User</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Name </FormLabel>
                  <FormControl>
                    { /* Your form field */}
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )} />

            <DialogFooter>
              <Button type="submit">Save User</Button>
            </DialogFooter>
          </form>
        </Form>

      </DialogContent>
    </Dialog>
  )
}
export default AddUserModal