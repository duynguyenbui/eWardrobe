import { currentUser } from '@/lib/payload'
import { User } from '@/payload-types'
import { redirect } from 'next/navigation'
import { ProfileForm } from '@/components/profile-form'
import { UserCircle2Icon } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AddressForm } from '@/components/address-form'

const ProfilesPage = async () => {
  const { user } = (await currentUser()) as { user: User | null }

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <h1 className="text-4xl font-bold mb-2 flex space-x-2 items-center">
        Profiles
        <UserCircle2Icon className="w-8 h-8 ml-2" />
      </h1>
      <Tabs defaultValue="account">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="addresses">Addresses</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <ProfileForm user={user} />
        </TabsContent>
        <TabsContent value="addresses">
          <AddressForm user={user} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ProfilesPage
