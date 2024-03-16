import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import Slide from 'components/Slide'

import Header from 'components/header/Header'

import coverSrc from 'public/img/cover/cover1.jpg'

import one from 'public/img/store/admin/one.bmp'
import two from 'public/img/store/admin/two.bmp'
import three from 'public/img/store/admin/three.bmp'
import four from 'public/img/store/admin/four.bmp'

import Logo from 'public/img/logo/nakprasith.png'

const inter = Inter({ subsets: ['latin'] })

export default function Manager() {

    const managerJson = 
        [
            {
                "imgsrc": one.src,
                "alt": "หน้าที่ 1"
            },
            {
                "imgsrc": two.src,
                "alt": "หน้าที่ 2"
            },
            {
                "imgsrc": three.src,
                "alt": "หน้าที่ 3"
            },
            {
                "imgsrc": four.src,
                "alt": "หน้าที่ 4"
            }
        ]



  return (
    <>
      <Head>
        <title>ผู้บริหารโรงเรียน</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={Logo.src} />
      </Head>
      <main>
        <Header title="ผู้บริหารโรงเรียน" label="" coverSrc={coverSrc.src} />


    

        <div className="container-page activity">

        <section className="">
              <div className="container-page">
                <h1></h1>
                
                <br />

                <div className='grid sm:grid-cols-1 md:grid-cols-2 3xl:grid-cols-4 gap-4'>
                  <img className='rounded-2xl' src={one.src}></img>
                  <img className='rounded-2xl' src={two.src}></img>
                  <img className='rounded-2xl' src={three.src}></img>
                  <img className='rounded-2xl' src={four.src}></img>
                </div>

              </div>
            </section>
        </div>

      </main>
      
    </>
  )
}
