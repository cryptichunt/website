import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-left: auto;
`

export const Button = styled.button`
  font-family: 'Avenir Black';

  border: 0;
  padding: 0;
  padding: 5px 30px;
  border-radius: 3px;
  color: white;
  background: #2977f5;
  box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.25);
  font-size: 0.8rem;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0px 7px 35px #2977f590;
    transform: translateY(-1px);
    outline: none;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 30px;
  }
`

function Navbar() {
  return (
    <Container>
      <a
        href="https://discord.gg/C5Y2CQ5"
        target="_blank"
        rel="noreferrer"
        style={{ color: 'white', textDecoration: 'none' }}
      >
        <Button>Join Discord</Button>
      </a>
    </Container>
  )
}

export default Navbar
