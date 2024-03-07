import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MyEvaluations",
  description: "A site to help you evaluate whatever you want to evaluate.",
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>
}
