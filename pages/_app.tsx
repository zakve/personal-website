import { NextUIProvider, createTheme } from '@nextui-org/react';
import type { AppProps } from 'next/app'

import '../styles/globals.css'

const myDarkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // brand colors
      background: '#1d1d1d',
      text: '#fff',
      // custom color
      myDarkColor: '#ff4ecd'
      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return <NextUIProvider theme={myDarkTheme}>
    <Component {...pageProps} />
  </NextUIProvider>
}

export default MyApp
