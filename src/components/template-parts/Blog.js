import React, { useEffect } from 'react'
import {graphql} from 'gatsby'
import {Link} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from '../layout';



const Blog = ({data: {blog}}) => {


    useEffect(()=> {
        const blogLink = document.getElementById('blog-link')
        blogLink.classList.add('active');
    }, []);
    
    const {title, featuredImage, content} = blog;

    if(content) {
        const Bold = ({ children }) => <span className="bold">{children}</span>
        const Text = ({ children }) => <p className='description'>{children}</p>
        const Heading1 = ({ children }) => <h1>{children}</h1>
        const Heading2 = ({ children }) => <h2>{children}</h2>
        const Heading3 = ({ children }) => <h3>{children}</h3>
        const Heading4 = ({ children }) => <h4>{children}</h4>
        const Heading5 = ({ children }) => <h5>{children}</h5>

        const options = {
            renderMark: {
                [MARKS.BOLD]: text => <Bold>{text}</Bold>,
            },
            renderNode: {
                [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
                [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
                [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
                [BLOCKS.HEADING_4]: (node, children) => <Heading4>{children}</Heading4>,
                [BLOCKS.HEADING_5 ]: (node, children) => <Heading5 >{children}</Heading5 >,
                [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
                [BLOCKS.EMBEDDED_ASSET]: node => {
                    const imgSrc = node.data.target.gatsbyImageData;
                return (
                    <>
                        <GatsbyImage image={imgSrc} />
                    
                    </>
                )
                },
            },
        }
        
        var body = renderRichText(content, options)
    }

    return (
        <Layout>

            <section id='blog-details'>
                <Link className='back' to='/blogs'>
                    &lt;&nbsp;Back to Blogs
                </Link>
                <h3 className='title'>{title}</h3>
                <GatsbyImage image={featuredImage.gatsbyImageData} />
                {/* <p className='description'>{description}</p> */}
                {body && body}
            </section>
        </Layout>
    )
}

export default Blog

export const query = graphql`
    query($slug: String!) {
        blog: contentfulPost(slug: {eq: $slug}) {
            id
            title
            content {
                raw
                references {
                        ... on ContentfulAsset {
                            __typename
                            contentful_id
                            gatsbyImageData
                        }
                    
                }
            }

            featuredImage {
                gatsbyImageData
            }
        }
    }
`