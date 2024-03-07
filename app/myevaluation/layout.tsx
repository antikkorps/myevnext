import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import NavbarMobile from "@/components/NavbarMobile"

import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MyEvaluations",
  description: "A site to help you evaluate whatever you want to evaluate.",
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <section>
        <nav>
          <Navbar />
        </nav>
        <NavbarMobile />
        {children}
      </section>
    </ThemeProvider>
  )
}
