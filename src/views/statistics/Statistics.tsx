import type { AdminViewProps } from 'payload'
import { DefaultTemplate } from '@payloadcms/next/templates'
import { Gutter, toast } from '@payloadcms/ui'
import '../tailwind.css'
import { currentUser, isAdmin } from '@/lib/payload'
import { redirect } from 'next/navigation'

const Statistics: React.FC<AdminViewProps> = async ({ initPageResult, params, searchParams }) => {
  const { user } = await currentUser()

  if (!(await isAdmin())) {
    redirect('/login')
  }
  return (
    <DefaultTemplate
      i18n={initPageResult.req.i18n}
      locale={initPageResult.locale}
      params={params}
      payload={initPageResult.req.payload}
      permissions={initPageResult.permissions}
      searchParams={searchParams}
      user={initPageResult.req.user || undefined}
      visibleEntities={initPageResult.visibleEntities}
    >
      <Gutter>
        <h1 className="text-5xl font-bold">Custom Component goes here</h1>
        <p className="text-muted-foreground text-lg font-semibold">Customed by duynguyenbui</p>
      </Gutter>
    </DefaultTemplate>  
  )
}

export default Statistics
