import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Discord = styled.div`
  top: 31vh;
  right: 15%;
  position: absolute;
  background-color: #2f3336;
  width: 420px;
  border-radius: 5px;
  padding: 0 0 4px 0;
  margin: 0;
  p {
    margin: 25px 30px 20px 30px;
  }
  @media screen and (max-width: 1440px) {
    top: 33vh;
    width: 350px;
  }
  @media screen and (max-width: 1200px) {
    right: 10%;
  }
  @media screen and (max-width: 1080px) {
    right: 5%;
  }
  @media screen and (max-width: 960px) {
    position: static;
    padding-top: 8px;
    width: 100%;
    height: 50%;
  }
`

const Icon = styled.div`
  background-color: #ee3769;
  border-radius: 50%;
  margin: 30px;
  height: 75px;
  width: 75px;
`

const ButtonDiscord = styled.button`
  background: #ee3769;
  color: #eee;
  display: block;
  border-radius: 5px;
  padding: 2% 20%;
  margin: 15px 30px 30px 30px;
  border: solid #ee3769;
  font-weight: 600;
  box-shadow: 0px 8px 32px #ee376920;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 8px 32px #ee376970;
    transform: translateY(-2px);
  }
  @media screen and (max-width: 1200px) {
    right: 10%;
  }
  @media screen and (max-width: 960px) {
    padding: 2% 15%;
  }
  @media screen and (max-width: 280px) {
    padding: 4% 10%;
  }
`

const MainText = styled.div`
  width: 40%;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Cryptocracy</h1>
    <MainText>
      <p>A cryptic hunt organised by high school students from Delhi.</p>
      <p>
        Check out the{' '}
        <b>
          <a
            href="https://www.instagram.com/p/CBWK36Hl995/?igshid=kws9jeec5w0j"
            target="_blank"
            rel="noreferrer"
          >
            prizes here!
          </a>
        </b>{' '}
        We are officially sponsored by{' '}
        <b>
          <a
            href="https://www.ivyachievement.com/"
            target="_blank"
            rel="noreferrer"
          >
            IvyAchievement.
          </a>
        </b>
      </p>
      <p>
        The hunt was held on 26th June 12:00 AM IST - 27th June 11:59 PM IST
        2020.
      </p>
      <p>
        <b>
          <a href="/leaderboard">Click here</a>
        </b>{' '}
        to view the results.
      </p>
    </MainText>
    <Discord>
      <Icon />
      <p>You're invited to join our Discord server!</p>
      <p style={{ fontSize: '0.99em', opacity: '70%', marginTop: '0' }}>
        Join our Discord server! It's the place where we will be releasing
        hints, confirming leads, and posting all hunt related content. Some
        levels will require you to contact members of our team on Discord.
      </p>
      <a
        href="https://discord.com/invite/C5Y2CQ5"
        target="_blank"
        rel="noreferrer"
      >
        <ButtonDiscord>Join Server</ButtonDiscord>
      </a>
    </Discord>
  </Layout>
)

export default IndexPage
