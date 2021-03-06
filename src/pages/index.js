import React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout pageTitle="Home">

    <section className="section">
      <h2>Welcome to your new Gatsby site.</h2>
      
      <p>
        Don't forget to edit <code>gatsby-config.js</code>
      </p>
      <p>
        And to add <code>GATSBY_GRAPHQL_IDE=playground</code> to <code>.env</code>
      </p>
    </section>
  </Layout>
)

export default IndexPage
