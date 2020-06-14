import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import terminalText from "../../data/terminalText"
import SEO from "../components/seo"
import "../components/layout.css"

const Terminal = styled.div`
  margin: auto;
  width: 60%;
  color: #eee;
  line-height: 32px;
  @media screen and (max-width: 768px) {
    width: 75%;
  }
  text {
    font-size: 18px;
  }
`

const Tag = styled.text`
  color: #1793d1;
  font-weight: bold;
`

const Blinking = styled.span`
  text.blinking {
    animation: blinkingText 1.2s infinite;
  }
  @keyframes blinkingText {
    0% {
      color: #eee;
    }
    49% {
      color: #eee;
    }
    60% {
      color: transparent;
    }
    99% {
      color: transparent;
    }
    100% {
      color: #eee;
    }
  }
`

const MainTerminal = styled.div`
  padding: 50px;
`

const FormatLayout = () => (
  <MainTerminal>
    <SEO title="Rules & Format" />
    <Terminal>
      {terminalText.map(({ command, text, commandText, date }) => (
        <div>
          <p style={{ margin: "0" }}>
            <Tag>[villager@archlinux ~]$ </Tag>
            <text>{command}</text>
            <br />
          </p>
          {commandText}
          {date}
          <text>{text}</text>
        </div>
      ))}
      <p style={{ margin: "0" }}>
        <Tag>[villager@archlinux ~]$ </Tag>
        <text>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            cd Home
            <Blinking>
              <text class="blinking">|</text>
            </Blinking>
          </Link>
        </text>
      </p>
    </Terminal>
  </MainTerminal>
)

export default FormatLayout
