import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Member from '../../data/memberInfo'

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const AboutBox = styled.div`
  border-radius: 5px;
  background-color: #2f3336;
  padding: 20px 20px 30px 20px;
  margin: 0 10px 10px 0;
  text-align: center;
  font-size: 24px;
  position: relative;
  line-height: 28px;
  color: #eee;
  flex: 1;
  flex-basis: 300px;
  &:hover {
    transform: translateY(-2px);
  }
  * {
    background-color: transparent;
  }
  main {
    font-size: 19px;
  }
  i {
    font-size: 18px;
  }
  main,
  i {
    display: inline;
  }
`

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin: 20px;
  color: #ee3769;
  background-color: transparent;
`

const ButtonContact = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  margin-top: 16px;
  border: 0;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  background: #ee3769;
`

const About = styled.div`
  padding: 0;
  margin: 0;
`

const AboutPage = () => (
  <Layout>
    <About>
      <SEO title="About" />
      <h1>About</h1>
      <p>
        A cryptic hunt is an online multiplayer event that involves players
        having to follow a trail of leads and clues to get to a question's
        answer. These answers aren't directly available on the internet, and
        each question generally takes a great deal of patience and mental
        prowess to solve.
      </p>
      <p>
        <b>
          <Link to="/format">Click here</Link>
        </b>{' '}
        for more details reagrding the event.
      </p>
      <h1>Prizes</h1>
      <p>
        <b>1st -</b> ₹20,000
        <br />
        <b>2nd -</b> ₹15,000
        <br />
        <b>3rd -</b> ₹10,000
        <br />
        <b>4th to 15th -</b> ₹1,000 each
        <br />
      </p>
      <p>
        In addition to this, everyone in the <b>top 100</b> will receive a{' '}
        <b>.co domain</b> of their choosing. Everyone in the <b>top 15</b> will
        also receive an <b>additional .us domain</b> along with their .co
        domain. Premium domains are not permitted.
      </p>
      <h1>Members</h1>
      <AboutContainer>
        {Member.map(({ name, post, email }) => (
          <AboutBox key={name}>
            <Title>{name}</Title>
            <div>
              <main style={{ fontSize: '22px' }}>Organiser</main>
              <br />
              <i>{post}</i> <br />
              <a href={email}>
                <ButtonContact>Contact</ButtonContact>
              </a>
            </div>
          </AboutBox>
        ))}
      </AboutContainer>
    </About>
  </Layout>
)

export default AboutPage
