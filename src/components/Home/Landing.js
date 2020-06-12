import React from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { Button } from '../navbar'

// import LandingAnimation from './landingAnimation'
import ivy from '../../images/ivylogo.webp'

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: white;
  padding: 18vh 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    height: 75vh;
    padding: 5vh 0;
  }
`

export const Heading = styled.div`
  font-family: 'Avenir Black';
  font-size: 7vh;
  line-height: 7vh;
  color: #E95420;
`

const Subheading = styled.div`
  font-family: 'Avenir Medium';
  font-size: 20px;
  margin-top: 2vh;
  color: #D3D3D3;

  padding-right: 5rem;

  @media screen and (max-width: 768px) {
    padding-right: 1rem;
    font-size: 18px;
  }
`

const Ivy = styled.img` 
  margin-top: 11vh;
  transition: all 0.25s ease;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  &:hover {
    transform: translateY(-1px);
  }
`

const A = styled.text`
  font-weight: 600;
  &:hover {
    opacity: 0.8;
    transition: all 0.25s ease;
  }
  cursor: pointer;
`

function Landing() {
  return (
    <Container>
      <div>
        <Heading>Cryptocracy</Heading>
        <Subheading>
          <p>A cryptic hunt organised by high school students from Delhi.</p>
          <p>
            Join our Discord to stay updated. Registrations are now live!
            Register now at the link below. 
          </p>
          <p>Check out the prizes <A target="_blank" href="https://www.instagram.com/p/CBWK36Hl995/?igshid=kws9jeec5w0j">here!</A></p>
          <p>19th-20th June, 2020.</p>
        </Subheading>
        <Button onClick={() => navigate('/register')}>Register</Button>
        <Button onClick={() => navigate('/about')} style={{ marginLeft:'1em'}}>About</Button>
      </div>
      <OutboundLink href="https://www.ivyachievement.com/" target="_blank">
        <Ivy src={ivy} alt="IvyAcheivement" />
      </OutboundLink>
    </Container>
  )
}

export default Landing
