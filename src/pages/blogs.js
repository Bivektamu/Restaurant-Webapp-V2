import * as React from "react"
import { graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
// import SEO from "../components/seo"

import Reservation from '../components/layout/Reservation';
import Hero from '../components/template-parts/Hero';
import Card from '../components/layout/Card';

const Blogs= ({data: {blogs} }) => {
  
  return (

    <Layout>
      <Hero slug="page-blogs" />
      <section id='blog'>
            <h2 className='heading'>Recent Blogs</h2>
            <Card slug='recent-news' items={blogs.edges} />
        </section>
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
                  slug
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