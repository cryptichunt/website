import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { navigate } from "@reach/router"

const FormatLink = styled.b`
  display: inline-block;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="Registration Successful" />
    <h1>Thank you for registering!</h1>
    <p>
      The hunt is on <b>19th - 20th June 2020.</b> Till then, do{" "}
      <b>join our Discord server.</b> It's the place where we will be releasing
      hints, confirming leads, and posting all hunt related content. Some levels
      will require you to contact members of our team from whom you can expect a
      punctual reply from on Discord.
    </p>
    <p>
      <b onClick={() => navigate("/format")}>
        <FormatLink>Click here</FormatLink>
      </b>{" "}
      for more details regarding the event.
    </p>
  </Layout>
)

export default NotFoundPage
