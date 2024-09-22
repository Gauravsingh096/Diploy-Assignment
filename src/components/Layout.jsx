import React from 'react'
import HeroSection from "./header";
import Features from "./feature";
import Products from "./product";
import Policies from "./policies";
import BusinessSection from "./business";
import ReviewCarousel from "./carousel";

function Layout() {
  return (
    <>
        <HeroSection />
        <Features />
        <Products />
        <Policies />
        <BusinessSection />
        <ReviewCarousel />
    </>
  )
}

export default Layout