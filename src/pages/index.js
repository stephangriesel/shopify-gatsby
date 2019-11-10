import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ProductsListing from "../components/ProductsListing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProductsListing />
  </Layout>
)

export default IndexPage
