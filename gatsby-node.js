const path = require('path');

exports.createPages = ({ graphql, actions: {createPage} }) => {
    return graphql(`
        {
            blogs:allContentfulPost {
                edges {
                    node {
                        slug
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
            }
        }
    `).then((result) => {
        result.data.blogs.edges.forEach( ({node}) => {
            createPage({
                path: `/blogs/${node.slug}`,
                component: path.resolve(`./src/components/template-parts/Blog.js`),
                context: {
                    slug: node.slug,
                
                }
            })
        })
    })

}