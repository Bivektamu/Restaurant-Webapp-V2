import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
// import SEO from "../components/seo"

import Hero from '../components/template-parts/Hero';
import Chefs from "../components/template-parts/Chefs";
import Reservation from '../components/layout/Reservation';
import Testimonials from "../components/template-parts/Testimonials";

const About = () => {
  
  return (

  <Layout>
    <Hero slug='page-about' />
    <Chefs />
    <Testimonials />
    <Reservation />

  </Layout>
)
  }
export default About
