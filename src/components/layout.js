import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { navigate } from "@reach/router"

import Header from "./header"
import "./layout.css"
import Social from "../../data/socialLinks"

const Content = styled.div`
  margin: auto;
  width: 70%;
  padding-top: 15vh;
  h1 {
    font-weight: 700;
    font-size: 60px;
    color: #ee3769;
    margin-top: 0;
    white-space: nowrap;
  }
  h2 {
    color: #ee3769;
    margin-bottom: 48px;
    font-size: 48px;
  }
  p {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    background-color: transparent;
  }
  b {
    font-weight: 600;
    color: #ee3769;
  }
  a {
    text-decoration: none;
    color: inherit;
    display: inline-block;
  }
  a:hover {
    transform: translateY(-2px);
  }
  footer {
    margin: 3em 0 1em 0;
  }
  @media screen and (max-width: 1440px) {
    h1,
    h2.abouttitle {
      padding-top: 50px;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
  @media screen and (max-width: 1080px) {
    width: 90%;
  }
  @media screen and (max-width: 960px) {
    padding-top: 10vh;
    width: 80%;
    h1,
    h2.abouttitle {
      padding-top: 1.75em;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      padding-top: 1.35em;
    }
    h2.abouttitle {
      padding-top: 0;
    }
  }
  @media screen and (max-width: 580px) {
    h1 {
      font-size: 48px;
    }
    p {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 400px) {
    h1 {
      font-size: 38px;
      padding-top: 2em;
    }
  }
  @media screen and (max-width: 305px) {
    h1 {
      font-size: 32px;
      padding-top: 2.75em;
    }
    h2 {
      font-size: 24px;
    }
    h2.abouttitle {
      padding-top: 2em;
    }
    p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 255px) {
    h1 {
      font-size: 28px;
      padding-top: 3.75em;
    }
    h2 {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 225px) {
    h1 {
      font-size: 24px;
      padding-top: 4.75em;
    }
    h2.abouttitle {
      font-size: 20px;
      padding-top: 6em;
    }
  }
`

const SocialItem = styled.a`
  color: #eee;
  text-decoration: none;
  font-size: 28px;
  margin-right: 1em;
  @media screen and (max-width: 420px) {
    margin-top: 12px;
  }
`

const A = styled.div`
  background-color: transparent;
  font-size: 20px;
  text-decoration: none;
  padding: 24px 24px 0 0;
  display: inline-block;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
  @media screen and (max-width: 580px) {
    font-size: 18px;
  }
  @media screen and (max-width: 305px) {
    font-size: 16px;
  }
`

const HeaderLinks = styled.div``

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
      <style>
        {" "}
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');{" "}
      </style>
      <div>
        <main>
          <Content>
            <Header siteTitle={data.site.siteMetadata.title} />
            {children}
            <footer>
              {Social.map(({ title, href, icon }) => (
                <SocialItem
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  alt={title}
                  key={title}
                >
                  {icon}
                </SocialItem>
              ))}
              <HeaderLinks>
                <A onClick={() => navigate("/")}>Home</A>
                <A onClick={() => navigate("/about")}>About</A>
                <A onClick={() => navigate("/leaderboard")}>Leaderboard</A>
                <A onClick={() => navigate("/format")}>Format</A>
              </HeaderLinks>
            </footer>
          </Content>
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
