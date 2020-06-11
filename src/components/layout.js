import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import SocialItems from './socialItems'

import './fonts.css'
import './layout.css'

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Discord',
    href: 'https://discord.com/invite/C5Y2CQ5',
    external: true,
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Register',
    href: '/register',
  },
  {
    title: 'Leaderboard',
    href: '/leaderboard',
  },
  {
    title: 'Format',
    href: '/format',
  },
]

const FooterLinks = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;

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
  }

  @media screen and (max-width: 768px) {
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
            {navItems.map(item =>
              item.external ? (
                <a href={item.href}>{item.title}</a>
              ) : (
                <Link to={item.href}>{item.title}</Link>
              )
            )}
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
