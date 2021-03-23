import React from 'react'
import {useStaticQuery,  graphql} from 'gatsby';
import {Link} from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Carousel from './Carousel';

const Hero = ({slug}) => {

    const data = useStaticQuery(graphql`
                    query MyQuery {
                      allContentfulHero {
                        edges {
                          node {
                            slug
                            title
                            content {
                              content
                            }
                            heroSlider {
                                id
                                gatsbyImageData
                            }
                          }
                        }
                      }
                    }
     
                  `);
      let heroContent = data.allContentfulHero.edges.filter(item => item.node.slug === slug)
      


    
const {title, content, heroSlider} = heroContent[0].node;
  
    return (
        <section className='hero-banner'>
      <div className='hero-wrapper'>
        <div className='hero-left'>
          <h1 className='heading'>{title && title}</h1>

          {slug === 'page-home' && <>
              <div className='d-sm-flex flex-wrap'>
                  <Link
                    className='button button-hero button-shadow'
                    to='/booking'
                  >
                    Book Now
                  </Link>
              </div>
            </>}

            <p>{content && content.content}</p>

         
          <ul className='hero-info d-none d-lg-block'>
            <li>
              <StaticImage src = "../../images/icons/fas-service-icon.png" alt="icon" />
              <h4>Fast Service</h4>
            </li>
            <li>
              <StaticImage src="../../images/icons/fresh-food-icon.png" alt="icon" />
              <h4>Fresh Food
</h4>
            </li>
            <li>
              <StaticImage src="../../images/icons/support-icon.png" alt="icon" />
              <h4>24/7 Support
</h4>
            </li>
          </ul>
          <ul className='social-icons d-none d-lg-block'>
            <li>
              <a
                href='https://www.facebook.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-facebook-f'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.twitter.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-instagram'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='hero-right'>
          <Carousel slides={heroSlider&& heroSlider} />
        </div>
      </div>
    </section>
 
    )
}

export default Hero
