import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const FormatLink = styled.a`
  text-decoration: none;
  display: inline-block;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="Registration Successful" />
    <h1 style={{ whiteSpace: 'normal' }}>Thank you for registering!</h1>
    <p>
      The hunt is on <b>26th - 27th June 2020.</b> Till then, do{' '}
      <a
        href="https://discord.com/invite/C5Y2CQ5"
        target="_blank"
        rel="noreferrer"
      >
        <b>join our Discord server.</b>
      </a>{' '}
      It's the place where we will be releasing hints, confirming leads, and
      posting all hunt related content. Some levels will require you to contact
      members of our team from whom you can expect a punctual reply from on
      Discord.
    </p>
    <p>
      <FormatLink href="/format">
        <b>Click here</b>{' '}
      </FormatLink>{' '}
      for more details regarding the event.
    </p>
  </Layout>
)

export default NotFoundPage
