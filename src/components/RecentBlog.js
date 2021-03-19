import React from 'react'
import {useStaticQuery,  graphql} from 'gatsby';
import Card from './layout/Card';



function RecentBlog() {

    const data = useStaticQuery(graphql`
        query RecentNews {
            allContentfulSection(filter: {page: {eq: "Home"}, slug: {eq: "recent-news"}}) {
                edges {
                    node {
                        slug
                        title
                        heading
                    }
                }
            }
            allContentfulPost(limit: 3) {
                edges {
                    node {
                        id
                        title
                        featuredImage {
                            gatsbyImageData
                        }
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
                        
                    }
                }
            }
        }

    `)

    // console.log(data);

    const recent = data.allContentfulPost.edges
    const {title, heading} = data.allContentfulSection.edges[0].node

    return (
        <section id='blog'>
            <h5 className='small-heading'>{title}</h5>
            <h2 className='heading'>{heading}</h2>
            <Card from='blog' items={recent} />
        </section>
    )
}

export default RecentBlog
