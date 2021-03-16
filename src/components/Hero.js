import React from 'react'
import {useStaticQuery,  graphql} from 'gatsby';
import {Link} from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Carousel from './Carousel';

function Hero() {
    const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulHero(filter: {slug: {eq: "page-home"}}) {
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
     
    `)

    
const {title, content, heroSlider} = data.allContentfulHero.edges[0].node;
  
  
    return (
        <section className='hero-banner'>
      <div className='hero-wrapper'>
        <div className='hero-left'>
          <h1 className='heading'>{title}</h1>

            <div className='d-sm-flex flex-wrap'>
                <Link
                  className='button button-hero button-shadow'
                  to='/booking'
                >
                  Book Now
                </Link>
            </div>

            <p>{content}</p>

         
          <ul className='hero-info d-none d-lg-block'>
            <li>
              <StaticImage src="../../public/icons/fas-service-icon.png" alt="icon" />
              <h4>Fast Service</h4>
            </li>
            <li>
              <StaticImage src="../../public/icons/fresh-food-icon.png" alt="icon" />
              <h4>Fresh Food
</h4>
            </li>
            <li>
              <StaticImage src="../../public/icons/support-icon.png" alt="icon" />
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
          <Carousel slides={heroSlider} />
        </div>
      </div>
    </section>
 
    )
}

export default Hero
