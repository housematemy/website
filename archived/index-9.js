import React from 'react';
import Layout from "../components/App/Layout";
import SEO from "../components/App/SEO";
import NavbarStyleSeven from '../components/App/NavbarStyleSeven';
import MainBanner from '../components/HomeDemoNine/MainBanner';
import Features from './../components/HomeDemoNine/Features';
import AboutUsContent from '../components/HomeDemoNine/AboutUsContent';
import Services from '../components/HomeDemoNine/Services';
import WhatWeDo from '../components/HomeDemoNine/WhatWeDo';
import CaseStudies from '../components/HomeDemoNine/CaseStudies';
import TeamMember from '../components/HomeDemoNine/TeamMember';
import IntroVideo from '../components/HomeDemoNine/IntroVideo';
import Partners from '../components/HomeDemoNine/Partners';
import Pricing from '../components/HomeDemoNine/Pricing';
import GetStarted from '../components/HomeDemoNine/GetStarted';
import Testimonials from '../components/HomeDemoNine/Testimonials';
import BlogPost from '../components/HomeDemoNine/BlogPost';
import FooterStyle2 from '../components/App/FooterStyle2';

const HomeNine = () => {
    return (
        <Layout>
            <SEO title="Home Nine" />

            <NavbarStyleSeven />

            <MainBanner />

            <Features />

            <AboutUsContent />

            <Services />

            <WhatWeDo />

            <CaseStudies />

            <TeamMember />

            <IntroVideo />

            <Partners />

            <Pricing />

            <GetStarted />

            <Testimonials />

            <BlogPost />
 
            <FooterStyle2 />
        </Layout>
    )
}

export default HomeNine;