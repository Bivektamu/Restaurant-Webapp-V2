import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
// import SEO from "../components/seo"

import Hero from '../components/template-parts/Hero';
import Popular from '../components/template-parts/Popular';
import RecentBlog from "../components/template-parts/RecentBlog";
import Offer from '../components/layout/Offer';
import Reservation from '../components/layout/Reservation';

const Home = () => {
  
  return (

  <Layout>
    <Hero slug="page-home" />
    <Popular />
    <Offer />
    <Reservation />
    <RecentBlog />

  </Layout>
)
  }
export default Home
