import react, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'
import ITheme from "../styles/styled-components-types"

const HeaderWr = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  height: 6rem;
  padding: 2rem 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  z-index: 10;
  background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0)); 

  @media (min-width: 1024) {

  }

  .wrapper {
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`

const Header: FC = () => {
  return (
    <HeaderWr>
      <div className="wrapper">
        <Link href="/">
          <a>
            <Image src="/images/logo-netflix.png" alt="Logo Netflix" width={110} height={60} />
          </a>
        </Link>
      </div>
    </HeaderWr>
  )
}

export default Header