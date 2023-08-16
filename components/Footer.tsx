import react, { FC } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const FooterWrapper = styled.div`
  box-sizing: border-box;
  padding: 2rem 4%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 1.2rem;
  line-height: 1.3;
  color: #555;

  .wrapper {
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;

    p {
      margin: 0 0 .5rem;

      &:last-child {
        margin: 0;
      }
    }
  }

  .logo {
    filter: grayscale(100%);
    transform: translateX(-1.45rem);
  }
`

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <div className="wrapper">
        <Image src="/images/logo-netflix.png" alt="Logo Netflix" width={160} height={90} className="logo" />
        <p>This site is made for learning purposes. I wanted to try some React, NextJS, Redux Toolkit, CSS in JS with Styled Components, Hooks, etc</p>
        <p>@ 2021 Alberto Fortes, Front-end React developer / UI engineer.</p>
      </div>
    </FooterWrapper>
  )
}

export default Footer