"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { Home, Grid, User, LayoutDashboard, Menu, X, Wallet } from "lucide-react"

const routes = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "Marketplace",
    path: "/marketplace",
    icon: Grid,
  },
  {
    name: "Artists",
    path: "/artists",
    icon: User,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-500"></div>
            <span className="text-xl font-semibold tracking-tight">Artistry</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.path ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </Button>
          <Button variant="default" size="sm" className="hidden md:inline-flex">
            Sign Up
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden container py-4 pb-6">
          <nav className="flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary p-2 rounded-md",
                  pathname === route.path ? "bg-muted text-foreground" : "text-muted-foreground",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                <route.icon className="h-4 w-4" />
                {route.name}
              </Link>
            ))}
            <Button variant="outline" size="sm" className="mt-2 flex items-center justify-center gap-2">
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
