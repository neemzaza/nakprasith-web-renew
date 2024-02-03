import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Header from 'components/header/Header'

import coverSrc from 'public/img/cover/cover3.jpg'

import Logo from 'public/img/logo/nakprasith.png'

const inter = Inter({ subsets: ['latin'] })

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>ช่องทางการติดต่อของโรงเรียนนาคประสิทธิ์</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={Logo.src} />
      </Head>
      <main className={styles.main}>
        <Header title="ติดต่อเรา" label="ช่องทางการติดต่อของโรงเรียนนาคประสิทธิ์ มูลนิธิวัดบางช้างเหนือ" coverSrc={coverSrc.src} />
        <div className="container-page bg-sky-200">
          <section className="social">
            <h1><i className="bi bi-chat-square-dots"></i> ช่องทางการติดต่อ</h1>
            <br />
            <h2 className="text-2xl"><i className="bi bi-flag"></i> Facebook Page</h2>
            <br />
            <div className="facebook-page-nav text-xl underline pl-10">
              <Link href="https://www.facebook.com/AnubalNP"><i className="bi bi-facebook"></i> แผนกอนุบาล</Link>

              <br /><br />

              <Link href="https://www.facebook.com/profile.php?id=100057684098918"><i className="bi bi-facebook"></i> แผนกประถมศึกษา</Link>

              <br /><br />

              <Link href="https://www.facebook.com/NP.Secondary"><i className="bi bi-facebook"></i> แผนกมัธยมศึกษา</Link>


            </div>

            <br />

            <h2 className="text-2xl"><i className="bi bi-envelope"></i> Email</h2>
            <div className="email text-xl underline pl-10">
              <br />
              <a href="mailto:nakprasith@yahoo.com">nakprasith@yahoo.com</a>
              <br /><br />
              <a href="mailto:npkindergarten@gmail.com">npkindergarten@gmail.com (แผนกอนุบาล)</a>
            </div>



          </section>
        </div>
      </main>
    </>
  )
}
