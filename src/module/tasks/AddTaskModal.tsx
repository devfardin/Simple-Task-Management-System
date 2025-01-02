/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar";
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
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useForm } from "react-hook-form";

function AddTaskModal() {
  const form = useForm();
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const handleFormSubmit = (data: any) => {
    console.log(data);

  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-neutral-600">Add Task</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Title </FormLabel>
                  <FormControl>
                    { /* Your form field */}
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )} />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Description </FormLabel>
                  <FormControl>
                    { /* Your form field */}
                    <Textarea {...field} />
                  </FormControl>
                </FormItem>
              )} />

            <FormField
              control={form.control}
              name="deuDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Deu Date </FormLabel>
                  <FormControl>
                    { /* Your form field */}
                    <Calendar {...field} mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border shadow w-full" />
                  </FormControl>
                </FormItem>
              )} />

            <FormField
              control={form.control}
              name="isCompleted"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Status</FormLabel>
                  <FormControl>
                    { /* Your form field */}
                    <Select {...field}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="In Process" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="In Process">In Process</SelectItem>
                          <SelectItem value="Completed">Completed</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )} />

            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>

      </DialogContent>
    </Dialog>
  )
}
export default AddTaskModal