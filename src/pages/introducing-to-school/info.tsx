import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import Slide from 'components/Slide'

import Header from 'components/header/Header'

import coverSrc from 'public/img/cover/cover1.jpg'

import one from 'public/img/store/info/one.bmp'
import two from 'public/img/store/info/two.bmp'

import Logo from 'public/img/logo/nakprasith.png'

const inter = Inter({ subsets: ['latin'] })

export default function Info() {

    const infoJson = 
        [
            {
                "imgsrc": one.src,
                "alt": "หน้าที่ 1"
            },
            {
                "imgsrc": two.src,
                "alt": "หน้าที่ 2"
            }
        ]



  return (
    <>
      <Head>
        <title>ข้อมูลทั่วไป โรงเรียนนาคประสิทธิ์</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={Logo.src} />
      </Head>
      <main>
        <Header title="ข้อมูลทั่วไป โรงเรียนนาคประสิทธิ์" label="" coverSrc={coverSrc.src} />


    

        <div className="container-page activity">

        <section className="">
              <div className="container-page">
                <h1></h1>
                
                <br />

                <Slide imginfo={infoJson} wrapAround={false} autoPlay={false} />

              </div>
            </section>
        </div>

      </main>
      
    </>
  )
}
