// import '../../dist/output.css'

import '@/styles/globals.css'
import '@/styles/nav/navbar.css'
import '@/styles/nav/navpage.css'
import '@/styles/home/home.css'
import '@/styles/header/header.css'
import '@/styles/slide/slide.css'

import type { AppProps } from 'next/app'

import Navbar from 'components/Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavPage from 'components/NavPage'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavPage />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
