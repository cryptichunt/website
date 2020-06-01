import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MemberLayout from '../components/memberlayout'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>A cryptic hunt is an online multiplayer event that involves players having to follow a trail of leads and clues to get to a question's answer. These answers aren't directly available on the internet, and each question generally takes a great deal of patience and mental prowess to solve.</p>
    <p>More details regarding the hunt will be released soon.</p>
    <h1>Members</h1>
        <MemberLayout />
  </Layout>
)

export default AboutPage
