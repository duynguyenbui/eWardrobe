import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { currentUser } from '@/lib/payload'
import Image from 'next/image'

export default async function Home() {
  const { user } = await currentUser()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  eWardrobe
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your smart digital closet. Organize, plan, and elevate your style effortlessly.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" asChild>
                  <Link href={user ? '/profiles' : '/login'}>Get Started</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/listings">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-14 lg:py-16 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simplify Your Wardrobe
                </h2>
                <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Organize your clothes, create outfits, and plan your looks with ease. Experience
                  the future of fashion management.
                </p>
              </div>
              <div className="w-full max-w-full overflow-hidden">
                <Image
                  alt="eWardrobe App Screenshot"
                  priority
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-auto h-auto"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">© 2023 eWardrobe. All rights reserved.</p>
            </div>
            <nav className="flex gap-4">
              <Link className="text-sm text-gray-500 hover:underline underline-offset-4" href="/">
                Terms
              </Link>
              <Link className="text-sm text-gray-500 hover:underline underline-offset-4" href="/">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
