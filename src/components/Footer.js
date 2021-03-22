import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {renderRichText} from 'gatsby-source-contentful/rich-text'
import {BLOCKS, MARKS} from "@contentful/rich-text-types"

function Footer() {

    const data = useStaticQuery(graphql`
    
                query Footer {
                    allContentfulFooter(filter: {slug: {eq: "footer"}}) {
                        edges {
                            node {
                                title
                                heading
                                openTimes {
                                    raw
                                }
                            }
                        }
                    }
                }
    `);

    const {title, heading, openTimes} = data.allContentfulFooter.edges[0].node

       
    const Bold = ({ children }) => <span className="bold">{children}</span>
    const Text = ({ children }) => <p>{children}</p>


    const options = {
        renderMark: {
          [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        },
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
         
        },
      }
    const times = renderRichText(openTimes, options)


    return (
        <footer>
          <section>
            <div className='flex-2'>
              <div>
                <h3>{title && title}</h3>
                <p>
                  {heading && heading}
                </p>
              </div>
              <div>
                {times && times}
              </div>
            </div>
          </section>
        </footer>
      );
}

export default Footer
