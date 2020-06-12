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
const About = styled.div` 
  color: #D3D3D3;
  h1 {
    color: #E95420;
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <About>
      <h1>About</h1>
      <p>A cryptic hunt is an online multiplayer event that involves players having to follow a trail of leads and clues to get to a question's answer. These answers aren't directly available on the internet, and each question generally takes a great deal of patience and mental prowess to solve.</p>
      <p>
        <Link to="/format" style={{ textDecoration:'none', color:'inherit' }}><A>Click here</A></Link> for more details regarding the event.
        <Link to="/leaderboard" style={{ textDecoration:'none', color:'inherit' }}><A> Click here</A></Link> to view the leaderboard.
      </p>
      <h1>Prizes</h1>
      <p>
          <b>1st -</b> ₹20,000*<br />
          <b>2nd -</b> ₹15,000*<br />
          <b>3rd -</b> ₹10,000*<br />
          <b>4th to 15th -</b> ₹1,000* each<br />
      </p>
        <p> In addition to this, everyone in the <b>top 100</b> will receive a <b>.co domain</b> of their choosing. Everyone in the <b>top 15</b> will also receive a <b>.us domain</b> along with their <b>.co domain.</b> Premium domains are not permitted.<br />
          <i style={{ fontSize:'12px' }}>*prizes will be in the form of an Amazon gift card</i>
        </p>
      <h1>Members</h1>
      <MemberLayout />
    </About>
  </Layout>
)

export default AboutPage
