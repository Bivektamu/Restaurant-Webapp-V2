import React from 'react'
import {useStaticQuery,  graphql} from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import {Link} from 'gatsby';


function Offer() {

    const data = useStaticQuery(graphql`
  
    query Offer {
        allContentfulSection(filter: {slug: {eq: "offer"}}) {
            edges {
                node {
                    title
                    heading
                    featuredImage {
                        gatsbyImageData
                    }
                }
            }
        }
    }
    
    `);


  const { title, heading, featuredImage } = data.allContentfulSection.edges[0].node;



    return (
        <section id='offer'>
            <div className='grid-2'>
                <div>
                    <GatsbyImage className="block"  image={featuredImage.gatsbyImageData} alt={title} />
                </div>
                <div>
                    <div className='wrapper'>
                        <h3 className='title'>{title}</h3>
                        <h2 className='heading'>{heading}</h2>
                        <Link to='/blog'>
                            <button className='button'>Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer;
