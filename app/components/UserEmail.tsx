import { getCurrentUser } from '@/lib/dal'
import { UserIcon} from 'lucide-react'
import UserEmailClient from './UserEmailClient'

const UserEmail = async () => {
  const user = await getCurrentUser()

  return (
    <UserEmailClient email={user?.email ?? ''} />
  )
}

export default UserEmail
