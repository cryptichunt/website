import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SuccessPage = () => (
  <Layout>
    <SEO title="Successfully registered" />
    <h1>Thank you for registering!</h1>
    <p>
      The hunt is on 19-20th June 2020. Till then, do join our Discord server.
      It's the place where we will be releasing hints, confirming leads, and
      posting all hunt related content. Some levels will require you to contact
      members of our team from whom you can expect a punctual reply from on
      Discord.
    </p>
    <p>More details will be released soon.</p>
  </Layout>
)

export default SuccessPage
