import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import {Link} from 'gatsby';

function Card({slug, items}) {

  var cardTitle, cardInfo, link;

  const cards = items.map(item => {

    const { id, menuName, featuredImage, description } = item.node;
    
    cardTitle = menuName;
    cardInfo = description && description.description;


    if(slug === 'recent-news') {
      const {title} = item.node
      
      cardTitle = title
      link = item.node.slug;
    
    }

    if(slug === 'chefs') {
      const { jobTitle, name, facebookPage, twitterPage, instagramPage, skypeId } = item.node;
      cardTitle = name
      cardInfo = jobTitle

      var socialLinks = <>
                <div className='social-links'>
                <a
                  href={facebookPage}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a
                  href={twitterPage}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-twitter'></i>
                </a>
                <a
                  href={instagramPage}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-instagram'></i>
                </a>
                <a
                  href={skypeId}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-skype'></i>
                </a>
              </div>
      </>
    }


    return (

      <div key={id}>
        <GatsbyImage className="block"  image={featuredImage.gatsbyImageData} alt='Popular Menu Items' />
        <div className='wrapper'>

          <h2 className='title'>{cardTitle && cardTitle}</h2>
          {cardInfo && <p>{cardInfo && cardInfo}</p>}

          {link && <>
            <div>
              <Link to = {`/blogs/${link}`}>
                Read More
              </Link>
            </div>
          </>}
          
          {socialLinks && socialLinks}

        </div>
      </div>
    );
  });
  return <div className='grid-3'>{cards}</div>;
}

export default Card
