import * as React from "react"
import { graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
// import SEO from "../components/seo"

import Reservation from '../components/layout/Reservation';
import Hero from '../components/template-parts/Hero';

const Blogs= ({data: {blogs} }) => {
  
  console.log(blogs);

  return (

    <Layout>
      <Hero slug="page-book" />
      <Reservation />
    </Layout>
)
  }
export default Blogs

export const query = graphql`
    query {
        blogs: allContentfulPost {
              edges {
                node {
                    id
                    title
                    content {
                        raw
                    }
                    featuredImage {
                        gatsbyImageData
                    }
                  }
            }
        }
    }
`