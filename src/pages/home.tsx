import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Link from 'next/link'

import Slide from 'components/Slide'

import Header from 'components/header/Header'

import coverSrc from 'public/img/cover/cover1.jpg'
import HeadNP from 'public/img/person/headnp.jpg'

import currentEvent from 'components/data/current-event.json'

import Logo from 'public/img/logo/nakprasith.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>โรงเรียนนาคประสิทธิ์ | Nakprasith School</title>
        <meta name="description" content="97/1 ม.3 ต. คลองใหม่ อ.สามพราน จ.นครปฐม 73110" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={Logo.src} />
      </Head>
      <main>
        <Header title="แต่งกายเรียบร้อย ยิ้มง่าย ไหว้สวย" label="อัตลักษณ์ของโรงเรียนนาคประสิทธิ์ มูลนิธิวัดบางช้างเหนือ" coverSrc={coverSrc.src} />


        <div className="grid lg:grid-flow-col auto-cols-fr">
          <div className="lg:col-span-2 lg:w-auto w-screen news">
            {/* News */}

            <h1>ผู้บริหาร</h1>

            <br />

              <Image src={HeadNP} sizes='100vw' priority className='headnp' alt='ss' />


          </div>
          <div className="col-span-6">
            {/*  */}
            <section className="activity">
              <div className="container-page">
                <h1>กิจกรรมต่างๆ</h1>
                
                <br />

                <Slide imginfo={currentEvent} wrapAround={true} autoPlay={true} />

              </div>
            </section>

          </div>
        </div>


      </main>
      
    </>
  )
}
