import { currentUser } from '@/lib/payload'
import { User } from '@/payload-types'
import { redirect } from 'next/navigation'
import { ProfileCard } from '@/components/profile-card'

const ProfilesPage = async () => {
  const { user } = (await currentUser()) as { user: User | null }

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <ProfileCard user={user} />
    </div>
  )
}

export default ProfilesPage
