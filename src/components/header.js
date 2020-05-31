import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Navbar from './navbar'

import logo from '../images/gatsby-icon.webp'

const Container = styled.header`
  /* margin-bottom: 1rem; */
`

const Logo = styled.img`
  max-height: 8vh;
  border-radius: 50%;
  transform: translateX(-20%) translateY(30%);
`

const Header = ({ siteTitle }) => (
  <Container>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
        display: `flex`,
        alignItems: `center`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {/* {siteTitle} */}
        <Logo src={logo} alt="Cryptocracy" />
      </Link>
      <Navbar />
    </div>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
