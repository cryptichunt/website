import React from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { Button } from '../navbar'

import LandingAnimation from './landingAnimation'

const Container = styled.div`
  width: 100%;
  height: 70vh;
  /* background: green; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: white;
  padding: 18vh 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    height: 80vh;
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
  /* color: #FFFFFA; */
  color: #D3D3D3;

  padding-right: 5rem;

  @media screen and (max-width: 768px) {
    padding-right: 1rem;
    font-size: 18px;
  }
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
          <p>19th-20th June, 2020.</p>
        </Subheading>
        <Button onClick={() => navigate('/register')}>Register</Button>
        <Button onClick={() => navigate('/about')} style={{ marginLeft:'1em'}}>About</Button>
      </div>
      {/* <div>
        <LandingAnimation />
      </div> */}
    </Container>
  )
}

export default Landing
