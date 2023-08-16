import styled, { ThemeProvider } from 'styled-components'
import ITheme from "../styles/styled-components-types"
import theme from "../styles/styled-components-theme"

import GlobalStyle from "../styles/globalStyles"

import { Provider } from 'react-redux';
import type { AppProps } from 'next/app'
import { store } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
