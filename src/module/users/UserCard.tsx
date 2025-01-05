import { Button } from '@/components/ui/button';
import { removeUser } from '@/redux/features/users/userSlice';
import { useAppDispatch } from '@/redux/hooks'
import { IUser } from '@/types'
import { Trash2 } from 'lucide-react';
interface IProps {
  user: IUser,
};

const UserCard = ({user}: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className='border rounded-lg p-5'>
      <h1 className='font-medium text-3xl flex items-center justify-between'>{user.name}
     <Button onClick={()=> dispatch(removeUser(user.id))}>
     <Trash2/> 
      </Button> 
      </h1>      
    </div>
  )
}

export default UserCard
