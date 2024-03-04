// import '../../dist/output.css'

import '@/styles/globals.css'
import '@/styles/nav/navbar.css'
import '@/styles/nav/navpage.css'
import '@/styles/home/home.css'
import '@/styles/header/header.css'
import '@/styles/slide/slide.css'
import '@/styles/footer/footer.css'

import type { AppProps } from 'next/app'

import Navbar from 'components/Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavPage from 'components/NavPage'
import Footer from 'components/Footer/Footer'

import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      router.reload()
    })
  }, [router])

  return (
    <>
      <NavPage />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
