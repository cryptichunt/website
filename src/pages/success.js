import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const A = styled.text`
  font-weight: 600;
  &:hover {
    opacity: 0.8;
    transition: all 0.25s ease;
  }
`

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
    <p><Link to="/format" style={{ textDecoration:'none', color:'inherit' }}><A>Click here</A></Link> for more details regarding the event.</p>
  </Layout>
)

export default SuccessPage
