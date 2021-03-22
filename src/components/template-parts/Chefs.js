import React from 'react';
import {useStaticQuery,  graphql} from 'gatsby';

import Card from '../layout/Card';


function Chefs() {


  const data = useStaticQuery(graphql`
  
  query Chefs {
    allContentfulSection(filter: {page: {eq: "about"}, slug: {eq: "chefs"}}) {
      edges {
        node {
          slug
          title
          heading
        }
      }
    }

    allContentfulChef {
      edges {
        node {
          id
          featuredImage {
            gatsbyImageData
          }
          name
          jobTitle
          facebookPage
          twitterPage
          instagramPage
          skypeId
        }
      }
    }
  }


  `)
  

  const {title, heading,slug} = data.allContentfulSection.edges[0].node;
  const chefs = data.allContentfulChef.edges;
  

  return (
    <section id='chefs'>
      <h5 className='small-heading'>{title && title}</h5>
      <h2 className='heading'>{heading && heading}</h2>
      <Card slug={slug} items={chefs} />

    </section>
  )
}

export default Chefs
