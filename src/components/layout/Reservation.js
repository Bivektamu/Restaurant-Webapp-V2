import React from 'react'
import {useStaticQuery,  graphql} from 'gatsby';

import BackgroundImage from 'gatsby-background-image'
import {Link} from 'gatsby';

function Reservation() {

    const data = useStaticQuery(graphql`
                    query RerservationQuery {
                        allContentfulSection(filter: {slug: {eq: "reservation"}}) {
                            edges {
                                node {
                                    title
                                    heading
                                    featuredImage {
                                        fluid {
                                            tracedSVG
                                            srcWebp
                                            srcSetWebp
                                            aspectRatio
                                            sizes
                                            src
                                            srcSet
                                        }
                                    }
                                }
                            }
                        }
                    }

            `);


    const { title, heading, featuredImage } = data.allContentfulSection.edges[0].node;


    return (
        <BackgroundImage
            Tag="section"
            id="reservation"
            fluid={featuredImage.fluid} 
            >
              <div className='wrapper'>
                  <h3>{title}</h3>
                 <h2 className="heading">{heading}</h2>
                 <Link to='/booking'>
                     <button className='button'>Book Table</button>
                 </Link>
             </div>

        </BackgroundImage> 


    //     <section id='reservation' style={{ backgroundImage: `url(${image})` }}>
    //        
    //   </section>

    )
}

export default Reservation
