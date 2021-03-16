import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
// import SEO from "../components/seo"

import Hero from '../components/Hero';
import Popular from '../components/Popular';
import Offer from '../components/layout/Offer';
import Reservation from '../components/layout/Reservation';

const Home = () => {
  
  return (


  <Layout>
    <Hero />
    <Popular />
    <Offer />
    <Reservation />

  </Layout>
)
  }
export default Home
