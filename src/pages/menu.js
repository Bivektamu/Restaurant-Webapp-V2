import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
// import SEO from "../components/seo"

import Hero from '../components/template-parts/Hero';
import Reservation from '../components/layout/Reservation';
import Menus from "../components/template-parts/Menus";

const Menu = () => {
  
  return (

  <Layout>
    <Hero slug="page-menu" />
    <Menus />
    <Reservation />

  </Layout>
)
  }
export default Menu
