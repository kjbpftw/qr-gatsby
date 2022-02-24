import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome to QuestR.</h1>
    <p>Unrecognized Face! You will need to set up an account if you plan on using this platform. </p>
    <p>Click a link to proceed...</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Rules and Regulations</Link> <br />
      <Link to="/using-typescript/">Is it Secure? </Link> <br />
      <Link to="/using-ssr">I want a QR Wallet</Link> <br />
      <Link to="/using-dsg">Using a QR Wallet</Link>
    </p>
  </Layout>
)

export default IndexPage
