import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Header from 'components/header/Header'

const inter = Inter({ subsets: ['latin'] })

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Header title="ติดต่อเรา" label="อัตลักษณ์ของโรงเรียนนาคประสิทธิ์ มูลนิธิวัดบางช้างเหนือ" coverSrc='https://caltech-prod.s3.amazonaws.com/main/images/vicic-hydrogen2.2e16d0ba.fill-1060x780-c100.jpg' />
      </main>
    </>
  )
}
