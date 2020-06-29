import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby'
import { navigate } from '@reach/router'

import IvyBanner from '../images/ivybannercompressed.webp'

const Logo = styled.img`
  margin: 0 0 4.5em 0;
  &:hover {
    transform: translateY(-2px);
  }
`

const HeaderContent = styled.div`
  padding: 0;
  margin: 0;
  display: block;
  a {
    text-decoration: none;
  }
  @media screen and (max-width: 960px) {
    margin-bottom: 1em;
  }
  @media screen and (max-width: 255px) {
    margin-bottom: 1.5em;
  }
  @media screen and (max-width: 225px) {
    margin-bottom: 2em;
  }
`

const Button = styled.button`
  float: right;
  background: #ee3769;
  color: #eee;
  border-radius: 5px;
  padding: 10px 24px;
  border: solid #ee3769;
  font-weight: 600;
  box-shadow: 0px 8px 32px #ee376920;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 8px 32px #ee376970;
    transform: translateY(-2px);
  }
  @media screen and (max-width: 960px) {
    font-size: 18px;
    position: absolute;
    left: 10%;
    margin-top: 5.35em;
    padding: 8px 20px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 6em;
    font-size: 16px;
  }
  @media screen and (max-width: 305px) {
    margin-top: 5em;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderContent>
    <a href="/">
      <Logo src={IvyBanner} alt="IvyBanner" />
    </a>
    <Button onClick={() => navigate('/leaderboard')}>Leaderboard</Button>
  </HeaderContent>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
