import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProductDetail from "../components/ProductDetail"

const ProductPageTemplate = ({ data }) => {
  return (
    <Layout>
      <ProductDetail product={data.shopifyProduct} />
    </Layout>
  )
}

export const query = graphql`
  query ProductQuery($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      images {
        localFile {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
      publishedAt(formatString: "YYYY")
      description
      descriptionHtml
      variants {
        sku
        id
        title
        price
      }
    }
  }
`

export default ProductPageTemplate