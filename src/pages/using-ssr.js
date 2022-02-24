import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingSSR = ({ serverData }) => {
  return (
    <Layout>
      <Seo title="QuestR: Request a WalleY" />
      <h1>Need a WalleY?</h1>
      <img
        style={{ width: "300px" }}
        alt="A QuestR WalleY"
        src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=fdskjhfdsa78fsd787fdsafuhsdasdfsda"
      />
      <p>Look at you go! You were granted a wallet!</p>
      <p>
       Note: A WalleY is linked to your device IMEI. This means that if you lose your device- you will lose your wallet / funds.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
