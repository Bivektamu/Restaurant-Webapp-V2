import React from 'react'
import {useStaticQuery,  graphql} from 'gatsby';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {GatsbyImage} from 'gatsby-plugin-image'




const Testimonials = () => {


    const data = useStaticQuery(graphql`
                query TestimonialQuery {
                allContentfulSection(filter: {page: {eq: "about"}, slug: {eq: "testimonial"}}) {
                    edges {
                    node {
                        slug
                        title
                        heading
                    }
                    }
                }
            
                  allContentfulTestimonial {
                    edges {
                      node {
                        id
                        avatar {
                          gatsbyImageData
                        }
                        name
                        testimonial {
                            testimonial
                        }
                        jobTitle
                      }
                    }
                  }

                }`)



    const {title, heading} = data.allContentfulSection.edges[0].node;
    const testimonials = data.allContentfulTestimonial.edges;

console.log(testimonials);

    const settings = {
        swipeToSlide: true,
        dots: true,
        // fade:true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: false
      };


      const testimonials_Slides = testimonials.map(
        (item) => {
            const {id, avatar, name, jobTitle, testimonial } = item.node
          return (
            <div key={id}>
              <div className='grid-2'>
                  <div className="wrap">
                    <GatsbyImage image={avatar.gatsbyImageData} width={100} />
                </div>
                <div className='car-info'>
                  <p>{testimonial.testimonial}</p>
                  <h2 className='title'>
                    {name}, <span className='position'>{jobTitle}</span>
                  </h2>
                </div>
              </div>
            </div>
          );
        }
      );

    return (
        <section id='testimonials'>
            <div className='wrapper'>
                <h5 className='small-heading'>{title && title}</h5>
                <h2 className='heading'>{heading && heading}</h2>
                <Slider {...settings}>{testimonials_Slides}</Slider>;
            </div>
        </section>
    )
}

export default Testimonials
