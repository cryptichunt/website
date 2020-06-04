import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import clitext from '../../data/clitext'
import SEO from '../components/seo'

const Main = styled.html`
    font-family: 'Ubuntu Mono', monospace;
    padding: 50px 0px; 
    line-height: 1.25em;
`

const Terminal = styled.div` 
    margin: auto;
    width: 50%;
    @media screen and (max-width: 768px) {
        transition: all 0.25s ease;
        width: 75%;
    }
`

const Tag = styled.text`
    color: #1793d1;
    font-weight: bold;
`

const Blinking = styled.span`
    text.blinking {
    animation:blinkingText 1.2s infinite;
    } 
    @keyframes blinkingText {
        0% {color: black;}
        49% {color: black;}
        60% {color: transparent;}
        99% {color:transparent;}
        100% {color: black;}
    }
`

const FormatLayout = () => (
    <Main>
        <style>@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap')</style>
        <SEO title="Rules & Format" />
        <Terminal>
                {clitext.map(({ command, text, commandText, date }) => (
                    <div>
                        <p style={{ margin:'0'}}>
                            <Tag>[villager@archlinux ~]$ </Tag>
                            <text>{command}</text><br />
                        </p>
                        {commandText}
                        {date}
                        <text>{text}</text>
                    </div>
                ))}
                <p style={{ margin:'0'}}>
                    <Tag>[villager@archlinux ~]$ </Tag>
                    <Link to="/" style={{ textDecoration:'none', color:'inherit' }}>cd Home<Blinking><text class="blinking">|</text></Blinking></Link>
                </p>
            </Terminal>
    </Main>
)

export default FormatLayout
