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

  const templates = {
    default: require.resolve(`./src/templates/default.jsx`),
    experiences: require.resolve(`./src/templates/experiences.jsx`),
    projects: require.resolve(`./src/templates/projects.jsx`),
  }

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
              templateKey
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
        const templateKey = node.frontmatter.templateKey
        const template = templates[templateKey] ?? templates.default

        createPage({
          path: node.frontmatter.slug,
          component: template,
          context: {
            slug: node.frontmatter.slug,
          },
        })
      }
    })
  })
}
