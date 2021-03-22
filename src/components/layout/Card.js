import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

function Card({from, items}) {

  const cards = items.map(item => {
    const { id, menuName, featuredImage, description } = item.node;
    if(from === 'blog') {
      var {title, content} = item.node

      const options = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: node => {
            console.log(node);
            return (
              <GatsbyImage className="block"  image={node.data.target.gatsbyImageData} alt='Popular Menu Items' />
            )
          }
        }
      }
      // var output = renderRichText(content)
      const output = renderRichText(content)
      const {props} = output[0];
      var excerpt = (props.children[0]);
      if(excerpt.length > 70) {
        excerpt = excerpt.substring(0,70) + "...";
      }
    }


    return (
      <div key={id}>
        <GatsbyImage className="block"  image={featuredImage.gatsbyImageData} alt='Popular Menu Items' />
        <div className='wrapper'>

          <h2 className='title'>{menuName ? menuName:title}</h2>
          {description && <p>{description && description.description}</p>}
          {excerpt && <>
            <div>
              {excerpt}
            </div>
          </>}
          
        </div>
      </div>
    );
  });
  return <div className='grid-3'>{cards}</div>;
}

export default Card
