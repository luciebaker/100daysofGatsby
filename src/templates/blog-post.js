import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SingleDaysHeader from "../components/utilities/100daysSingleHeader"
import { FaChevronCircleRight, FaChevronCircleLeft, FaTwitter } from 'react-icons/fa'
import Hero from "../components/utilities/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"


class BlogPostTemplate extends React.Component {
  render() {
    const BGimage = this.props.data.defaultBG.childImageSharp.fluid
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next, readingTime } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Hero img={BGimage}>
        <SingleDaysHeader title={post.frontmatter.title} subtitle={post.frontmatter.subtitle} author={post.frontmatter.author} date={post.frontmatter.date} readingTime={readingTime}/>
        </Hero>

        <article>
          <div className="container">
            <div className="day-container-single">
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            </div>
        </article>
        <div className="container">
        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <AniLink className="in-page-nav in-page-nav-left" fade to={previous.fields.slug} rel="prev">
                <FaChevronCircleLeft className="link-icon"/> {previous.frontmatter.title}
                </AniLink>
              )}
            </li>
            <li >
              {next && (
                <AniLink className="in-page-nav" fade to={next.fields.slug} rel="next">
                  {next.frontmatter.title} <FaChevronCircleRight className="link-icon"/>
                </AniLink>
              )}
            </li>
          </ul>
        </nav>
        </div>
                <br />

        <div className="text-center pt-3">
        <AniLink fade to='/'>
        <h5 className="btn-text mb-2">Return to #100 Days of Gatsby <FaChevronCircleRight className="link-icon"/></h5>
        </AniLink>
    </div>
    <div className="container text-center mt-3 mb-3">
    <h1 className="day-featured-text pt-2 pb-3">For quick daily updates, follow me on  <a href="https://twitter.com/LBMedia7" target="_blank" rel="noopener noreferrer"><FaTwitter className="day-icon" /></a> </h1>
    </div>



      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM D, YYYY")
        description
        author
      }
    }
  }
`
