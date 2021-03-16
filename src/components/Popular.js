import React from 'react';
import {useStaticQuery,  graphql} from 'gatsby';

import Card from '../components/layout/Card';


function Popular() {


  const data = useStaticQuery(graphql`
  
  query Popular {
    allContentfulSection(filter: {page: {eq: "Home"}, slug: {eq: "popular"}}) {
      edges {
        node {
          slug

          title
          heading
        }
      }
    }

    allContentfulMenuItems(filter: {popular: {eq: true}}) {
      edges {
        node {
          id
          featuredImage {
            gatsbyImageData
          }
          menuName
          description {
            description
          }
        }
      }
    }
  }


  `)
  

  const {title, heading,slug} = data.allContentfulSection.edges[0].node;
  const popularMenus = data.allContentfulMenuItems.edges;
  
  return (
    <section id='popular'>
      <h5 className='small-heading'>{title && title}</h5>
      <h2 className='heading'>{heading && heading}</h2>
      <Card from={slug} items={popularMenus} />

    </section>
  )
}

export default Popular
