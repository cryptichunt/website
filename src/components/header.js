import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { navigate } from "@reach/router"

import IvyBanner from "../images/ivybanner.webp"

const Logo = styled.img`
  width: 275px;
  padding: 0 0 4.5em 0;
  margin: 0;
  &:hover {
    transform: translateY(-2px);
  }
  @media screen and (max-width: 1440px) {
    padding: 0;
  }
`

const HeaderContent = styled.div`
  padding: 0;
  margin: 0;
  display: block;
  a {
    text-decoration: none;
  }
`

const Button = styled.button`
  float: right;
  background: #ee3769;
  margin-top: 18px;
  width: 7em;
  color: #eee;
  border-radius: 5px;
  padding: 8px 15px;
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
    margin-top: 5em;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderContent>
    <a href="https://www.ivyachievement.com/" target="_blank" rel="noreferrer">
      <Logo src={IvyBanner} alt="IvyBanner" />
    </a>
    <Button onClick={() => navigate("/register")}>Register</Button>
  </HeaderContent>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
