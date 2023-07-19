import React from 'react';
import Layout from "../components/App/Layout";
import SEO from "../components/App/SEO";
import NavbarStyleSix from '../components/App/NavbarStyleSix';
import MainBanner from '../components/HomeDemoEight/MainBanner';
import Features from '../components/HomeDemoEight/Features';
import AboutUsContent from '../components/HomeDemoEight/AboutUsContent';
import WhatWeDo from '../components/HomeDemoEight/WhatWeDo';
import Services from '../components/HomeDemoEight/Services';
import TeamMember from '../components/HomeDemoEight/TeamMember';
import IntroVideo from '../components/HomeDemoEight/IntroVideo';
import Partners from '../components/HomeDemoEight/Partners';
import Pricing from '../components/HomeDemoEight/Pricing';
import TestimonialStyleThree from '../components/Common/TestimonialStyleThree';
import BlogPost from '../components/HomeDemoEight/BlogPost';
import Newsletter from '../components/HomeDemoEight/Newsletter';
import FooterStyle2 from '../components/App/FooterStyle2';
 
const HomeEight = () => {
    return (
        <Layout>
            <SEO title="Home Eight" />

            <NavbarStyleSix />

            <MainBanner />

            <Features />

            <AboutUsContent />

            <WhatWeDo />

            <Services />

            <TeamMember />

            <IntroVideo />

            <Partners />

            <Pricing />

            <TestimonialStyleThree />

            <BlogPost />

            <Newsletter />
 
            <FooterStyle2 />
        </Layout>
    )
}

export default HomeEight;