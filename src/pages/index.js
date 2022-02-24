import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Unrecognized Face! </h1>
    <p>You will need to set up an account if you plan on using this platform. </p>
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
      <Link to="/secure/">Is it Secure? </Link> <br />
      <Link to="/using-ssr">I want a QR Wallet</Link> <br />
      <Link to="/using-wallet">Using a QR Wallet</Link>
    </p>
  </Layout>
)

export default IndexPage
