import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { navigate } from '@reach/router'
import styled from 'styled-components'

import Header from './header'
import SocialItems from './socialItems'

import './fonts.css'
import './layout.css'

const FooterLinks = styled.div`
  font-size: 14px;
  font-weight: bold;
  a {
    padding: 20px 15px 0 0;
    color: #565656;
    text-decoration: none;
    display: inline-block;
  }
  a:hover {
    transition: all 0.2s ease-in;
    color: #000;
    cursor: pointer;
    transform: scale(1.1) translateY(-1px);
  }
  @media screen and (max-width:768px){
    transform: translateY(125px);
    padding-bottom: 30px;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <SocialItems />
          <FooterLinks>
            <a onClick={() => navigate('/')}>HOME</a>
            <a href="https://discord.com/invite/C5Y2CQ5">DISCORD</a> 
            <a onClick={() => navigate('/about')}>ABOUT</a>
            <a onClick={() => navigate('/register')}>REGISTER</a>
            <a onClick={() => navigate('/leaderboard')}>LEADERBOARD</a>
            <a onClick={() => navigate('/format')}>FORMAT</a>
          </FooterLinks>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
