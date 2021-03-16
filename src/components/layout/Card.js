import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";



function Card({from, items}) {

  const cards = items.map(item => {
    const { id, menuName, featuredImage, description } = item.node;


    return (
      <div key={id}>
        <GatsbyImage className="block"  image={featuredImage.gatsbyImageData} alt='Popular Menu Items' />
        <div className='wrapper'>

          <h2 className='title'>{menuName}</h2>
          {description && <p>{description.description}</p>}
        </div>
      </div>
    );
  });
  return <div className='grid-3'>{cards}</div>;
}

export default Card
