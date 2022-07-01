const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      featuredImage: File @fileByRelativePath
    }
  `)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const defaultTemplate = require.resolve(`./src/templates/default.jsx`)

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.slug) {
        createPage({
          path: node.frontmatter.slug,
          component: defaultTemplate,
          context: {
            slug: node.frontmatter.slug,
          },
        })
      }
    })
  })
}
