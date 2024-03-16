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

        <section className="info grid gap-4 md:grid-cols-1 lg:grid-cols-2 overflow-hidden">
              <div className="container-page">
                <h1></h1>
                
                <br />

                <p className='text-lg'>
                <span className='text-xl'>
                  <b>โรงเรียนนาคประสิทธิ์&nbsp;</b>
                </span>
                มูลนิธิวัดบางข้างเหนือ ตั้งอยู่เลขที่ 97/1 หมู่ 3 ตำบลคลองใหม่อำเภอสามพราน จังหวัดนครปฐม 
                <br /><br />
                <ul className='list-disc pl-4'>
                  <li >เปิดสอนระดับชั้นเตรียมอนุบาล ถึงระดับชั้นมัธยมศึกษาปีที่ 6</li>
                  <li> ได้แยกระดับประกาศนียบัตรวิชาชีพเป็น วิทยาลัยเทคโนโลยีนาคประสิทธิ์บริหารธุรกิจ</li>
                  <li>พระพิพัฒน์ศึกษากร เจ้าอาวาสวัดบางช้างเหนือเป็นประธานมูลนิธิ</li>
                  <li>นายสันติ เย็นสบาย เป็นผู้ทำการแทนผู้รับใบอนุญาต มูลนิธิวัดบางช้างเหนือ</li>
                  <li>นางอารีย์ เฉลิมศักดิ์ เป็นผู้จัดการ</li>
                  <li>ดร.เครือวัลย์เผ่าผึ้ง เป็นผู้อำนวยการ</li>
                </ul>
                <br />
                <p>ดำเนินการบริหารจัดการโดยใช้โรงเรียนเป็นฐานในรูปแบบของคณะกรรมการ ซึ่งมีตัวแทนจากชุมชน ผู้ปกครอง ผู้ทรงคุณวุฒิ และผู้แทนครูร่วมเป็นกรรมการโรงเรียน </p>
                    <br />
              </p>

              </div>

              <div>
                <img className='w-[40rem] rounded-3xl m-0 m-auto relative top-[50%] translate-y-[-50%]' src={two.src} alt="" />
              </div>
            </section>
        </div>

      </main>
      
    </>
  )
}
