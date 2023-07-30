// import '../../dist/output.css'

import '@/styles/globals.css'
import '@/styles/navbar.css'
import '@/styles/navpage.css'

import type { AppProps } from 'next/app'

import Navbar from 'components/Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavPage from 'components/NavPage'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavPage />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
