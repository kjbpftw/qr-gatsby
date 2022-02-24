r// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <Seo title="QuestR: Security" />
    <h1>Is it Secure? How about safe?</h1>
    <p>
      Nothing in this world is secure. That's all an illusion. 
    </p>
    <p>
     It is best not to fool around with things that can get us into trouble. That's why we created QuestR. This is a platform in which transactions take place without either party communicating.
    </p>
   
    <Link to="/">Go back</Link>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
