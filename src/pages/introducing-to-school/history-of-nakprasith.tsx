import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import Slide from 'components/Slide'

import Header from 'components/header/Header'

import coverSrc from 'public/img/cover/cover2.jpg'

import one from 'public/img/store/history/one.bmp'
import two from 'public/img/store/history/two.bmp'
import three from 'public/img/store/history/three.bmp'

import Logo from 'public/img/logo/nakprasith.png'

const inter = Inter({ subsets: ['latin'] })

export default function Intro() {

    const historyJson = 
        [
            {
                "imgsrc": one.src,
                "alt": "หน้าที่ 1 - ช่วงแรกของการก่อตั้ง"
            },
            {
                "imgsrc": two.src,
                "alt": "หน้าที่ 2 - หลังการก่อตั้ง"
            },
            {
                "imgsrc": three.src,
                "alt": "หน้าที่ 3 - ณ ปัจจุบัน"
            }
        ]



  return (
    <>
      <Head>
        <title>ประวัติโรงเรียน</title>
        <meta name="description" content="เริ่มเปิดการเรียนการสอนตั้งแต่ พ.ศ.2484 - ปัจจุบัน" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={Logo.src} />
      </Head>
      <main>
        <Header title="ประวัติโรงเรียน" label="เริ่มเปิดการเรียนการสอนตั้งแต่ พ.ศ.2484 - ปัจจุบัน" coverSrc={coverSrc.src} />


    

        <div className="container-page activity">

        <section className="">
              <div className="container-page">
                <h1></h1>
                
                <br />

                <Slide imginfo={historyJson} wrapAround={false} autoPlay={false} />

              </div>
            </section>
        </div>

      </main>
      
    </>
  )
}
