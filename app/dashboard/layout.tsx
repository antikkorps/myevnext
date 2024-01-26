export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <nav className="sm:pt-24"> This is the Dashboard layout</nav>

      {children}
    </section>
  )
}
