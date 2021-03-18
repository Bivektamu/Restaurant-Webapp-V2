import React from 'react'
import {useStaticQuery,  graphql} from 'gatsby';

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
                    content {
                    raw
                    }
                    featuredImage {
                    gatsbyImageData
                    }
                }
                }
            }
        }

    `)

    // console.log(data);

    return (
        <div>
            RecentBlog
        </div>
    )
}

export default RecentBlog
