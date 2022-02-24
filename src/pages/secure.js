
import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const secure = () => (
  <Layout>
    <Seo title="QuestR: Secure" />
    <h1>Secure Behavior</h1>
    <p>There are policies and procedures in place for good reason - to keep everyone safe. Please take the time to memorize the affirmations. </p>
    <Link to="/">Go back</Link>
  </Layout>
)

export default secure
