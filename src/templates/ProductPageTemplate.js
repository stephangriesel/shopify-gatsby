import React from 'react';
import ProductDetail from '../components/ProductDetail';
import { graphql } from 'gatsby';

const ProductPageTemplate = ({ data }) => {
    debugger
    return (
        <div>
            <ProductDetail product={data.shopifyProduct} />
        </div>
    )
}

export const query = graphql`
query ProductQuery($handle: String!) {
  shopifyProduct(handle: { eq: $handle }) {
        id
        title
        images {
          originalSrc
          localFile {
            childImageSharp {
              fixed(width: 200) {
                ... GatsbyImageSharpFixed_withWebp_tracedSVG
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
