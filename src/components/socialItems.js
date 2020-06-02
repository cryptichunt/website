import React from 'react'
import styled from 'styled-components'

import social from '../../data/social'

const Container = styled.div`
  max-width: 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 60vw;
    transform: translateY(150px);
    margin-bottom: 3vh;
  }
`

const A = styled.a`
  color: #565656;
  text-decoration: none;
  font-size: 25px;
  transition: all 0.2s ease-in;

  margin-right: 1rem;

  &:hover {
    color: #000;
    transform: scale(1.1) translateY(-1px);
  }
`

function SocialItems() {
  return (
    <Container>
      {social.map(({ title, href, icon }) => (
        <A href={href} target="_blank" rel="noreferrer" alt={title} key={title}>
          {icon}
        </A>
      ))}
    </Container>
  )
}

export default SocialItems
