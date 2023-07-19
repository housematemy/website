import React from "react"
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import Navbar from "../components/App/Navbar"
import MainBanner from "../components/HomeDemoOne/MainBanner"
import Features from "../components/HomeDemoOne/Features"
import WhatWeDo from "../components/Common/WhatWeDo"
import OurTeamStyleOne from "../components/Common/OurTeamStyleOne"
import Footer from "../components/App/Footer"


const HomeOne = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <Navbar />

      <MainBanner />

      <WhatWeDo />

      <Features />

      {/*<TestimonialStyleOne />*/}    
 
      {/*<ServicesCard />*/}

      <OurTeamStyleOne />
       
      {/*<SubscribeForm />*/}
      
      <Footer />

      {/*<AboutSection />*/}
      {/*<Pricing />*/}
      {/*<Partner />*/}
    </Layout>
  )
}

export default HomeOne
