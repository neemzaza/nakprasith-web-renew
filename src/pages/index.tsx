import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Link from 'next/link'

import Slide from 'components/Slide'

import Header from 'components/header/Header'

import coverSrc from 'public/img/cover/cover1.jpg'
import HeadNP from 'public/img/person/headnp.jpg'

// import currentEvent from 'components/data/current-event.json'

import Logo from 'public/img/logo/nakprasith.png'
import { useEffect } from 'react'

import InfoJSON from '../../public/data/info.json'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {



    useEffect(() => {

        let name1 = document.getElementById("nameI");
        let name2 = document.getElementById("nameII");

        let upperText1 = InfoJSON['school-eng-name-1'].toUpperCase();
        //@ts-ignore
        name1.innerText = upperText1;

        let upperText2 = InfoJSON['school-eng-name-2'].toUpperCase();
        //@ts-ignore
        name2.innerText = upperText2;



    }, [])
    return (
        <>
            <Head>
                <title>โรงเรียนนาคประสิทธิ์ | Nakprasith School</title>
                <meta name="description" content="97/1 ม.3 ต. คลองใหม่ อ.สามพราน จ.นครปฐม 73110" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={Logo.src} />
            </Head>
            
            <main className='enter-the-website'>
                <nav className="navbar" id="navbar">
                    <Link href="#" className='navbar-brand flex flex-row gap-3'><div className='logo'><Image src={Logo} sizes='100vw' priority alt='' /></div><div ><span className='span1' id="nameI">Loading...</span><br /><span className='span2' id="nameII"></span></div></Link>
                </nav>

                <div className='relative top-[50%] translate-y-[-50%] text-center backdrop-blur-md m-0 m-auto p-[2rem]'>
                    <span className=''><h2 className='xl:text-6xl text-4xl'>โรงเรียนนาคประสิทธิ์</h2>
                    <br/>
                        <h2 className='xl:text-4xl text-2xl'>มูลนิธิวัดบางช้างเหนือ</h2>
                        <br/>
                        <p className=''>NAKPRASITH SCHOOL WAT BANGCHANGNUA FOUNDATION</p>
                    </span>
                    <br /><br />
                    <Link href="/home" className='bg-blue-500 p-3 rounded-xl text-white transition hover:bg-pink-500'>เข้าสู่เว็บไซด์โรงเรียน</Link>
                </div>

                <div className='absolute bottom-0 text-black left-[50%] translate-x-[-50%] mb-10'> © 2024 Nakprasith School</div>
            </main>
            
            

        </>
    )
}
