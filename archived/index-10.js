import React from 'react';
import Layout from "../components/App/Layout";
import SEO from "../components/App/SEO";
import NavbarStyleSeven from '../components/App/NavbarStyleSeven';
import MainBanner from '../components/HomeDemoTen/MainBanner';
import Services from '../components/HomeDemoTen/Services';
import AboutUsContent from '../components/HomeDemoTen/AboutUsContent';
import WhatWeDo from '../components/HomeDemoTen/WhatWeDo';
import CaseStudies from '../components/HomeDemoTen/CaseStudies';
import Testimonials from '../components/HomeDemoTen/Testimonials';
import CreativeSolutions from '../components/HomeDemoTen/CreativeSolutions';
import Pricing from '../components/HomeDemoTen/Pricing';
import Features from './../components/HomeDemoTen/Features';
import TeamMember from '../components/HomeDemoTen/TeamMember';
import Partners from '../components/HomeDemoTen/Partners';
import BlogPost from '../components/HomeDemoTen/BlogPost';
import Newsletter from '../components/HomeDemoTen/Newsletter';
import FooterStyle2 from '../components/App/FooterStyle2';

const HomeTen = () => {
    return (
        <Layout>
            <SEO title="Home Ten" />

            <NavbarStyleSeven />

            <MainBanner />

            <Services />

            <AboutUsContent />

            <WhatWeDo />

            <CaseStudies />

            <Testimonials />

            <CreativeSolutions />

            <Pricing />

            <Features />

            <TeamMember />

            <Partners />

            <BlogPost />

            <Newsletter />
 
            <FooterStyle2 />
        </Layout>
    )
}

export default HomeTen;