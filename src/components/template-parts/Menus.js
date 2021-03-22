import React from 'react'
import {useStaticQuery,  graphql} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image'

function Menus() {

    const data = useStaticQuery(graphql`
        query Menus {
        allContentfulSection(filter: {page: {eq: "menu"}, slug: {eq: "menus"}}) {
            edges {
                node {
                    title
                    heading
                }
            }
        }

        allContentfulMenuItems {
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
                    price
                }
            }
        }

    }`)

    const {title, heading} = data.allContentfulSection.edges[0].node;
    const menus = data.allContentfulMenuItems.edges;

    const mennuItems = menus.map((item) => {

        const { id, featuredImage, menuName, description, price } = item.node

        return (
          <div className='grid' key={id}>
            <div className="round-wrapper">
                <GatsbyImage className="round" image={featuredImage.gatsbyImageData} />
            </div>
            <div className='wrapper'>
              <h3 className='title'>{menuName}</h3>
              <p>{description.description}</p>
              <span>${price}</span>
            </div>
          </div>
        );
      });

    return (
        <section id='menus'>
        <h5 className='small-heading'>{title && title}</h5>
        <h2 className='heading'>{heading && heading}</h2>
        <div className='grid-2'>{mennuItems}</div>

  
      </section>
    )
}

export default Menus
