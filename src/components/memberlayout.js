import React from 'react'
import styled from 'styled-components'

import members from '../../data/members'
import './layout.css'

const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

const AboutBox = styled.div`
    border: 2px #f5f5f5 solid;
    padding: 20px;
    margin: 0 10px 20px 0;
    text-align: center;
    position: relative;
    flex: 1;
    flex-basis: 200px;
    &:hover {
        transition: all 0.25s ease;
        transform: translateY(-2px);
    } 
    i {
        font-size: 0.9em;
        white-space: pre;
    }
    main, i {
        display: inline;
    }
    main::after, i::after {
        content: "";
        white-space: pre;
        display: block;
    }
`

const Title = styled.div`
    font-size: 1.15em;
    font-weight: 600;
    margin: 20px;
` 

const ButtonDiscord = styled.button`
    font-family: 'Avenir Black';
    padding: 5px 20px; 
    margin-top: 10px;
    border: 0;
    border-radius: 3px;
    color: white;
    background: rgba(0,0,0,0.8);
    font-size: 0.8rem;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-2px);
        outline: none;
    } 
`

const MemberLayout = () => (
    <AboutContainer>
        {members.map(({ name, post, email }) => (
        <AboutBox>
            <Title>{name}</Title>
            <info>
                <main>Organiser</main>
                <i>{post}</i>
                <a href={email}><ButtonDiscord>Contact</ButtonDiscord></a>
            </info>
        </AboutBox>
        ))}
    </AboutContainer>
)

export default MemberLayout
