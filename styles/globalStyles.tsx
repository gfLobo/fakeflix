import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Netflix Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Netflix Sans Regular'), url('/fonts/NetflixSansRegular.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Netflix Sans Icon';
  font-style: normal;
  font-weight: normal;
  src: local('Netflix Sans Icon'), url('/fonts/NetflixSansIcon.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Netflix Sans';
  font-style: normal;
  font-weight: 100;
  src: local('Netflix Sans Thin'), url('/fonts/NetflixSansThin.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Netflix Sans';
  font-style: normal;
  font-weight: 300;
  src: local('Netflix Sans Light'), url('/fonts/NetflixSansLight.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Netflix Sans';
  font-style: normal;
  font-weight: 600;
  src: local('Netflix Sans Medium'), url('/fonts/NetflixSansMedium.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Netflix Sans';
  font-style: normal;
  font-weight: 700;
  src: local('Netflix Sans Bold'), url('/fonts/NetflixSansBold.woff') format('woff');
  }
  

  @font-face {
  font-family: 'Netflix Sans';
  font-style: normal;
  font-weight: 900;
  src: local('Netflix Sans Black'), url('/fonts/NetflixSansBlack.woff') format('woff');
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  html { 
    font-size: 10px;
    background-color: #141414;
  }

  :root {
    font-size: 62.5%;
    body {
      font-size: 1.6rem;
    }
  }

  a {
    color: #fff;
  }
  
  main.main {
    font-family: 'Netflix Sans', Helvetica, Arial, sans-serif;
    background-color: #141414;
    color: #fff;
    padding-top: 4rem;
  }

  html {
    overflow-y: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    scroll-padding: 0 2rem;
    z-index: @zindex--fixed;

    &::-webkit-scrollbar-track {
      border: none;
      background-color: transparent;
    }

    &::-webkit-scrollbar {
      width: .4rem;
      height: .4rem;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #000;
      border-radius: .4rem;
    }

    -ms-overflow-style: -ms-autohiding-scrollbar;
    scrollbar-width: thin;
  }
`

export default GlobalStyle;