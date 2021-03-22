import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

function Card({slug, items}) {

  var cardTitle, cardInfo;

  const cards = items.map(item => {

    const { id, menuName, featuredImage, description } = item.node;
    
    cardTitle = menuName;
    cardInfo = description && description.description;


    if(slug === 'recent-news') {
      var {title, content} = item.node
      cardTitle = title
      const output = renderRichText(content)
      const {props} = output[0];
      var excerpt = (props.children[0]);
      if(excerpt.length > 70) {
        excerpt = excerpt.substring(0,70) + "...";
      }
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
          {excerpt && <>
            <div>
              {excerpt}
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
