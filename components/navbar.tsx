"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { MenuIcon, SunIcon, MoonIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useState, useEffect } from "react"

export function Header() {
  const { setTheme } = useTheme()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show nav when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`
      flex sticky top-0 h-20 w-full shrink-0 items-center px-4 md:px-22 bg-background/95 backdrop-blur-sm text-foreground border-b border-border z-50
      transform transition-transform duration-300 ease-in-out
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}
    `}>
      <Link className="mr-6 flex items-center" href="#">
        <span className="text-3xl font-bold tracking-tight shiny-text mr-3">Spendo</span>
      </Link>
      <nav className="hidden md:flex gap-6 lg:gap-12 text-sm font-medium">
        <Link className="hover:text-primary transition-colors" href="#">
          Features
        </Link>
        <Link className="hover:text-primary transition-colors" href="#">
          Pricing
        </Link>
        <Link className="hover:text-primary transition-colors" href="#">
          Blog
        </Link>
        <Link className="hover:text-primary transition-colors" href="#">
          Changelog
        </Link>
      </nav>
      <div className="ml-auto flex items-center gap-4">
        <Button className="hidden md:inline-flex" variant="ghost">
          Log In
        </Button>
        
<Button className="hidden md:inline-flex bg-violet-600 text-white hover:bg-violet-700 relative overflow-hidden px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5 shiny-border-btn">
  Get Started Today
</Button>

        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden bg-transparent" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 p-4">
              <Link className="font-medium hover:text-primary transition-colors" href="#">
                Features
              </Link>
              <Link className="font-medium hover:text-primary transition-colors" href="#">
                Pricing
              </Link>
              <Link className="font-medium hover:text-primary transition-colors" href="#">
                Blog
              </Link>
              <Link className="font-medium hover:text-primary transition-colors" href="#">
                Changelog
              </Link>
              <Button variant="ghost">Log In</Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started Today</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

















// "use client"

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
// import { MenuIcon, SunIcon, MoonIcon } from "lucide-react"
// import { useTheme } from "next-themes"
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

// export function Header() {
//   const { setTheme } = useTheme()

//   return (
//     <header className="flex sticky h-20 w-full shrink-0 items-center px-4 md:px-22 bg-background text-foreground border-b border-border">
//       <Link className="mr-6 flex items-center" href="#">
//         <span className="text-3xl font-bold tracking-tight shiny-text mr-3">Spendo</span>
//       </Link>
//       <nav className="hidden md:flex gap-6 lg:gap-12 text-sm font-medium">
//         <Link className="hover:text-primary transition-colors" href="#">
//           Features
//         </Link>
//         <Link className="hover:text-primary transition-colors" href="#">
//           Pricing
//         </Link>
//         <Link className="hover:text-primary transition-colors" href="#">
//           Blog
//         </Link>
//         <Link className="hover:text-primary transition-colors" href="#">
//           Changelog
//         </Link>
//       </nav>
//       <div className="ml-auto flex items-center gap-4">
//         <Button className="hidden md:inline-flex" variant="ghost">
//           Log In
//         </Button>
//         <Button className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
//           Get Started Today
//         </Button>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" size="icon">
//               <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//               <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//               <span className="sr-only">Toggle theme</span>
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
//             <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
//             <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button className="md:hidden bg-transparent" size="icon" variant="outline">
//               <MenuIcon className="h-6 w-6" />
//               <span className="sr-only">Toggle navigation menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="right">
//             <div className="flex flex-col gap-4 p-4">
//               <Link className="font-medium hover:text-primary transition-colors" href="#">
//                 Features
//               </Link>
//               <Link className="font-medium hover:text-primary transition-colors" href="#">
//                 Pricing
//               </Link>
//               <Link className="font-medium hover:text-primary transition-colors" href="#">
//                 Blog
//               </Link>
//               <Link className="font-medium hover:text-primary transition-colors" href="#">
//                 Changelog
//               </Link>
//               <Button variant="ghost">Log In</Button>
//               <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started Today</Button>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   )
// }
