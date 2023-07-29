import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='Choose the package which best suits you. There are three types of packages that are available for our beloved customers.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
