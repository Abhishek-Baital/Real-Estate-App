import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Find your Dream Home from a large number of properties on our page. Find ✓327000+ Properties ... ✓46000+ New Projects & ✓15000+ PG/Co-Living Spaces. Enquire Now!' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
