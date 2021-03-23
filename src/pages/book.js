import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import BookingForm from "../components/template-parts/BookingForm";
// import SEO from "../components/seo"

import Hero from '../components/template-parts/Hero';

const Book= () => {
  
  return (

  <Layout>
    <Hero slug="page-book" />
    <BookingForm />
  </Layout>
)
  }
export default Book