import { IUser } from '@/types'
interface IProps {
  user: IUser,
};

const UserCard = ({user}: IProps) => {
  return (
    <div className='border rounded-lg p-5'>
      <h1 className='font-medium text-3xl'>{user.name}</h1>      
    </div>
  )
}

export default UserCard
