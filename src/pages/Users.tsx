import Container from '@/components/layout/Container'
import AddUserModal from '@/module/users/AddUserModal'
import { selectUsers } from '@/redux/features/users/userSlice'
import { useAppSelector } from '@/redux/hooks'
import React from 'react'

const Users = () => {
  const users = useAppSelector(selectUsers)
  return (
    <Container>
          <div className="mt-5 bg-neutral-300 p-3 mb-6 rounded-lg 
      flex justify-end items-center gap-5">
        <h1 className="font-medium mr-auto text-neutral-600 text-xl selection:bg-[#E0F5EF] selection:text-[#17B686]">All Task {users.length}</h1>
        <AddUserModal />
      </div>
    </Container>
  )
}

export default Users
