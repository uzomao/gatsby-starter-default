import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Uzoma</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Are you going to use a CSS framework on this project?</p>
    <ul>
      <li>
        <a href="https://www.gatsbyjs.org/docs/bulma/" target="blank_" rel="noopener noreferrer">
          Bulma
        </a>
      </li>
      <li>
        <a href="https://www.gatsbyjs.org/docs/tailwind-css/" target="blank_" rel="noopener noreferrer">
          Tailwind
        </a>
      </li>
      <li>
        <a href="https://www.gatsbyjs.org/docs/css-libraries-and-frameworks/" target="blank_" rel="noopener noreferrer">
          Other
        </a>
      </li>
    </ul>
    <p>
      Don't forget to edit <code>gatsby-config.js</code>
    </p>
  </Layout>
)

export default IndexPage
