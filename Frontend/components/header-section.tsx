import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Poller_One } from 'next/font/google'
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet'
import { Menu } from 'lucide-react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const poller_one = Poller_One({
  weight: ['400'],
  subsets: ['latin'],
})

export default function HeaderSection() {
  return (
    <div className="px-12 py-6">
      <div className="backdrop-blur-lg  rounded-lg flex justify-between items-center px-6 py-4 shadow-sm border-purple-500 border-[1px]">
        {' '}
        {/* Updated this line for purple background */}
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 md:hidden w-6" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="block px-2 py-1 text-lg">
                  Home
                </Link>
                <Link href="/dashboard" className="block px-2 py-1 text-lg">
                  Dashboard
                </Link>
                <Link href="/request-loan" className="block px-2 py-1 text-lg">
                  Request Loan
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="ml-4 lg:ml-0">
            <h1
              className={`text-xl active:scale-75 transition-all duration-200 font-bold ${poller_one.className}`}
            >
              FreedFi
            </h1>
          </Link>
        </div>
        <nav className="mx-4  items-center space-x-2 lg:space-x-4 hidden md:block">
          <Button asChild variant="ghost">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:bg-purple-100"
            >
              Home
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link
              href="/dashboard"
              className="text-sm font-medium transition-colors hover:bg-purple-100"
            >
              Dashboard
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link
              href="/request-loan"
              className="text-sm font-medium transition-colors hover:bg-purple-100"
            >
              Request Loan
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link
              href="/marketplace"
              className="text-sm font-medium transition-colors hover:bg-purple-100"
            >
              Market Place
            </Link>
          </Button>
        </nav>
        <div className="flex items-center">
          <div className="hidden lg:block">
            <ConnectButton accountStatus={'avatar'} />
          </div>
          <div className="lg:hidden">
            <ConnectButton accountStatus={'avatar'} />
          </div>
        </div>
      </div>
    </div>
  )
}
