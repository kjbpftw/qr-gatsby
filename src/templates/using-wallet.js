import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingWallet = () => (
  <Layout>
    <Seo title="Wallet" />
    <h3>QuestR Wallet</h3>
    <p>Awesome, here is your *wallet! Note: Your access keys are stored in cookies. If you clear any data relating to wesync.xyz- you are forfeiting your wallet and any of the funds associated with this account. DO NOT CLEAR ANY DATA!</p>
  <h1>*4.20</h1>  
  <p>
     {" "}
      <a href="#">
        ADD FUNDS
      </a>
      .
    </p>
    <Link to="/">Go back</Link>
  </Layout>
)

export default UsingWallet
