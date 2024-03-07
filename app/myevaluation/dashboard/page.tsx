import React from "react"

function Dashboard() {
  return (
    <>
      <div className="sm:py-5">This is the Dashboard page</div>

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
