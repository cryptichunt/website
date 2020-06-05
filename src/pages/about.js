import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MemberLayout from '../components/memberlayout'

const A = styled.text`
  font-weight: 600;
  &:hover {
    opacity: 0.8;
    transition: all 0.25s ease;
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>A cryptic hunt is an online multiplayer event that involves players having to follow a trail of leads and clues to get to a question's answer. These answers aren't directly available on the internet, and each question generally takes a great deal of patience and mental prowess to solve.</p>
    <p>
      <Link to="/format" style={{ textDecoration:'none', color:'inherit' }}><A>Click here</A></Link> for more details regarding the event.
      <Link to="/leaderboard" style={{ textDecoration:'none', color:'inherit' }}><A> Click here</A></Link> to view the leaderboard.
    </p>
    <h1>Members</h1>
        <MemberLayout />
  </Layout>
)

export default AboutPage
