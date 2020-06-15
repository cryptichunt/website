import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import terminalText from '../../data/terminalText'
import SEO from '../components/seo'
import '../components/layout.css'

const Terminal = styled.div`
  margin: auto;
  width: 60%;
  color: #eee;
  line-height: 32px;
  @media screen and (max-width: 768px) {
    width: 75%;
  }
  div {
    display: inline-block;
    font-size: 18px;
  }
`

const Tag = styled.div`
  color: #1793d1;
  font-weight: bold;
`

const Blinking = styled.span`
  div.blinking {
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
        <div key={command} style={{ display: 'block' }}>
          <Tag>[villager@archlinux ~]$ </Tag> {command}
          <br />
          {commandText}
          {date}
          {text}
        </div>
      ))}
      <div style={{ display: 'block' }}>
        <Tag>[villager@archlinux ~]$ </Tag>{' '}
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          cd Home
          <Blinking>
            <div className="blinking">|</div>
          </Blinking>
        </Link>
      </div>
    </Terminal>
  </MainTerminal>
)

export default FormatLayout
