import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import Hero from "../components/utilities/Hero"
import DaysHeader from "../components/utilities/100daysHeader"
import DaysInfo from "../components/utilities/100daysInfo"
import SEO from "../components/seo"
import { FaTwitter, FaChevronCircleRight } from 'react-icons/fa'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="100 Days Of Gatsby" />
        <Hero img={data.defaultBG.childImageSharp.fluid}>
        <DaysHeader title="#100 Days of Gatsby" subtitle="Taking on the Challenge!" />
        </Hero>
        <DaysInfo />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
            <div className="container">
            <div className="day-container text-left">
            <AniLink fade to={node.fields.slug}>
            <h2>{title}</h2>
            </AniLink>
            <h3>{node.frontmatter.subtitle}</h3>
            <h6>
            <span>By {node.frontmatter.author} </span> | <span>{node.frontmatter.date}</span>
            </h6>
            <p
              dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
              }}
            />
            <div className="text-right">
                <AniLink fade to={node.fields.slug}>
                <h5 className="btn-text pb-1">Read More <FaChevronCircleRight className="link-icon"/></h5>
                </AniLink>
            </div>
            </div>
            </div>
            </article>
          )
        })}
        <div className="container text-center mt-5 mb-3">
        <h1 className="day-featured-text pt-2 pb-3">For quick daily updates, follow me on  <a href="https://twitter.com/LBMedia7" target="_blank" rel="noopener noreferrer"><FaTwitter className="day-icon" /></a> </h1>
    </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    defaultBG: file(relativePath: {eq: "HeroBG.jpg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            subtitle
            description
            author
          }
        }
      }
    }
  }
`
