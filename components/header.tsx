"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Đội bóng", href: "/teams" },
  { name: "Lịch thi đấu", href: "/schedule" },
  { name: "Giới thiệu", href: "/about" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logos */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20iu-ZJx1qY9OoVYrE1RTb44ynPlJ5btq0c.jpg"
                alt="IU Logo"
                width={50}
                height={50}
                className="h-12 w-12 object-contain"
              />
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20ptit-Mwm931EMtq2Kx89YYCepIzznm3Pt8v.png"
                alt="PTIT Logo"
                width={50}
                height={50}
                className="h-12 w-12 object-contain"
              />
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20ript-l395VToTtX0RnmIZP3MkdaYKoXueVt.png"
                alt="RIPT Logo"
                width={50}
                height={50}
                className="h-12 w-12 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="ml-4">
              <Link href="/register">Đăng ký tham gia</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href="/register" onClick={() => setIsOpen(false)}>
                    Đăng ký tham gia
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
