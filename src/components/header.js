import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import logo from '../images/gatsby-icon.png'

const Container = styled.header`
  /* margin-bottom: 1rem; */
`

const Logo = styled.img`
  max-height: 7vh;
  border-radius: 50%;
  transform: translateX(-20%);
`

const Header = ({ siteTitle }) => (
  <Container>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
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
        <Logo src={logo} />
      </Link>
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
