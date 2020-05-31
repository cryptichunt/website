import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Not Found</h1>
    <p>
      You just hit a route that doesn&#39;t exist. You can go{' '}
      <Link to="/">home</Link>.
    </p>
  </Layout>
)

export default NotFoundPage
