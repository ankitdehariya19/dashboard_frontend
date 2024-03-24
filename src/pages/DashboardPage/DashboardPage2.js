import React from 'react'
import { AiOutlineHome, AiOutlineShopping, AiOutlineAreaChart, AiOutlineUser, AiOutlineLineChart, AiOutlineCalendar } from 'react-icons/ai';
const DashboardPage2 = () => {
  return (
<div>
  {/* <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <a className="flex items-center gap-2 font-semibold" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
              <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
              <path d="M12 3v6" />
            </svg>
            <span className>Acme Inc</span>
          </a>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground ml-auto h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <span className="sr-only">Toggle notifications</span>
          </button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <a className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Home
            </a>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <circle cx={8} cy={21} r={1} />
                <circle cx={19} cy={21} r={1} />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              Orders
            </a>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="m7.5 4.27 9 5.15" />
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
              Products
            </a>
            <a className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx={9} cy={7} r={4} />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Customers
            </a>
            <a className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
              Analytics
            </a>
          </nav>
        </div>
      </div>
    </div>
    <div className="flex flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <a className="lg:hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
            <path d="M12 3v6" />
          </svg>
          <span className="sr-only">Home</span>
        </a>
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400">
                <circle cx={11} cy={11} r={8} />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input className="flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950" placeholder="Search" type="search" />
            </div>
          </form>
        </div>
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800" type="button" id="radix-:r1p:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
          <img src="/placeholder.svg" width={32} height={32} className="rounded-full" alt="Avatar" style={{aspectRatio: '32 / 32', objectFit: 'cover'}} />
          <span className="sr-only">Toggle user menu</span>
        </button>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center gap-4">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            <span className="sr-only">Back</span>
          </button>
          <h1 className="font-semibold text-lg md:text-xl">Analytics</h1>
          <div className="ml-auto flex items-center gap-2">
            <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 hidden sm:flex">
              Today
            </button>
            <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 hidden md:flex">
              This Month
            </button>
            <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[280px] justify-start text-left font-normal" id="date" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1r:" data-state="closed">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
                <path d="M16 2v4" />
                <path d="M8 2v4" />
                <path d="M3 10h5" />
                <path d="M17.5 17.5 16 16.25V14" />
                <path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
              </svg>
              June 01, 2023 - June 30, 2023
            </button>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6">
                <p className="text-sm text-muted-foreground">Total Sales</p>
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">$2389.00</h3>
              </div>
              <div className="p-6">
                <div className="aspect-[4/3]">
                  <div style={{width: '100%', height: '100%'}} />
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6">
                <p className="text-sm text-muted-foreground">Sessions</p>
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">345</h3>
              </div>
              <div className="p-6">
                <div className="aspect-[4/3]">
                  <div style={{width: '100%', height: '100%'}} />
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6">
                <p className="text-sm text-muted-foreground">Returning Customers</p>
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">33.5%</h3>
              </div>
              <div className="p-6">
                <div className="aspect-[4/3]">
                  <div style={{width: '100%', height: '100%'}} />
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6">
                <p className="text-sm text-muted-foreground">Visitors</p>
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">3,456</h3>
              </div>
              <div className="p-6">
                <div className="aspect-[4/3]">
                  <div style={{width: '100%', height: '100%'}} />
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6">
                <p className="text-sm text-muted-foreground">Page Views</p>
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">12,345</h3>
              </div>
              <div className="p-6">
                <div className="aspect-[4/3]">
                  <div style={{width: '100%', height: '100%'}} />
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6">
                <p className="text-sm text-muted-foreground">Visitors</p>
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Top Referrers</h3>
              </div>
              <div className="p-6 grid gap-4">
                <div className="flex items-center">
                  <div>google.com</div>
                  <div className="font-semibold ml-auto">3K</div>
                </div>
                <div className="flex items-center">
                  <div>twitter.com</div>
                  <div className="font-semibold ml-auto">1.2K</div>
                </div>
                <div className="flex items-center">
                  <div>youtube.com</div>
                  <div className="font-semibold ml-auto">1.1K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div> */}


<div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-6">
              <a className="flex items-center gap-2 font-semibold" href="#">
                <AiOutlineHome />
                <span className>Acme Inc</span>
              </a>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground ml-auto h-8 w-8">
                <AiOutlineLineChart />
                <span className="sr-only">Toggle notifications</span>
              </button>
            </div>
            {/* Navigation links */}
            <nav className="grid items-start px-4 text-sm font-medium">
              <a className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50" href="#">
                <AiOutlineHome />
                Home
              </a>
              <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                <AiOutlineShopping />
                Orders
              </a>
              <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                <AiOutlineAreaChart />
                Products
              </a>
              <a className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50" href="#">
                <AiOutlineUser />
                Customers
              </a>
              <a className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50" href="#">
                <AiOutlineCalendar />
                Analytics
              </a>
            </nav>
          </div>
        </div>
        {/* Main content */}
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            {/* Header content */}
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            {/* Main content */}
          </main>
        </div>
      </div>
</div>

  )
}

export default DashboardPage2
