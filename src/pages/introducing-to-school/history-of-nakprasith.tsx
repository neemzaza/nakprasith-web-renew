import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import Slide from 'components/Slide'

import Header from 'components/header/Header'

import coverSrc from 'public/img/cover/cover2.jpg'
import coverSrc1 from 'public/img/cover/cover1.jpg'

import one from 'public/img/store/history/one.bmp'
import two from 'public/img/store/history/two.bmp'
import three from 'public/img/store/history/three.bmp'

import monkold from 'public/img/store/history/gallery/monkold1.png';

import schoolold1 from 'public/img/store/history/gallery/schoolold1.png';
import schoolold2 from 'public/img/store/history/gallery/schoolold2.png';
import schoolold3 from 'public/img/store/history/gallery/schoolold3.png';
import schoolold4 from 'public/img/store/history/gallery/schoolold4.png';

import schoolold5 from 'public/img/store/history/gallery/schoolold5.png';
import schoolold6 from 'public/img/store/history/gallery/schoolold6.png';
import schoolold7 from 'public/img/store/history/gallery/schoolold7.png';
import studentold1 from 'public/img/store/history/gallery/studentold1.png';

import monk1 from 'public/img/store/history/gallery/monk1.png';
import monk2 from 'public/img/store/history/gallery/monk2.png';

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
        <Header title="ประวัติโรงเรียน" label="เริ่มเปิดการเรียนการสอนตั้งแต่ พ.ศ.2484 - ปัจจุบัน" coverSrc={schoolold2.src} />




        <div className="container-page activity">

          <section className="info">
            <div className="container-page">
              <h1></h1>

              <br />

              {/* <Slide imginfo={historyJson} wrapAround={false} autoPlay={false} /> */}

              <p className='text-lg'>
                <span className='paragraph text-xl'>
                  <b>โรงเรียนนาคประสิทธิ์&nbsp;</b>
                </span>
                เป็นโรงเรียนของมูลนิธิวัดบางข้างเหนือ สังกัดสำนักงานคณะกรรมการส่งเสริมการศึกษาเอกชน
                สำนักงานเขตพื้นที่การศึกษาประถมศึกษานครปฐมเขต 2 เป็นโรงเรียน เอกชนแห่งแรกของอำเภอสามพรานจังหวัดนครปฐมตั้งขึ้นเมื่อวันที่ 20 สิงหาคม พ.ศ.2483 บนเนื้อที่
                35 ไร่โดยท่านพระครูปลัดผันแสงโสภา เปิดทำการสอนเมื่อวันที่ 15 กรกฎาคม
                พ.ศ.2484 มีนักเรียน 125 คนครู 5 คนอาคาร 1 หลัง <br />
              </p>

              <br /><br /><br />

              <div className='grid sm:grid-cols-2 lg:grid-cols-5 gap-4 gallery'>
                <div className='img'>
                  <img src={monkold.src} alt={''} />
                  <p className='caption text-center'>พระครูปลัดผันแสงโสภา</p>
                </div>
                <div className='img'>
                  <img src={schoolold1.src} alt={''} />
                </div>
                <div className='img'>
                  <img src={schoolold2.src} alt={''} />
                </div>
                <div className='img'>
                  <img src={schoolold3.src} alt={''} />
                </div>
                <div className='img'>
                  <img src={schoolold4.src} alt={''} />
                </div>

              </div>
              <br /><br /><br />
              <div className=''>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className=''>
                <p className='text-lg'>
                  <span className='paragraph '>
                    <span>เหตุผลที่ใช้ชื่อนาคประสิทธิ์เพราะในระหว่างการก่อสร้างอาคารเรียนหลังแรก <br/>
                    &lsquo;พระครูปลัดผันติตสุวรรณโณ (แสงโสภา)&lsquo;</span>
                  </span>&nbsp;
                  เจ้าอาวาสวัดบางช้างเหนือองค์แรก
                  ได้นิมิตเห็นพญานาคเลื้อยพันต้นเสาเอกของอาคารเรียนท่านจึงให้ชื่อโรงเรียนว่า
                  &lsquo;โรงเรียนนาคประสิทธิ์&lsquo;<br /><br />

                  <span>
                    
                  <span className='paragraph'>ปี พ.ศ.2484 - ปี พ.ศ.2543 ภายหลังจากพระครูปลัดผันติตสุวรรณโณมรณภาพพระพิศาลศึกษากร เจ้าอาวาสวัดบางช้างเหนือองค์ต่อมาได้เป็นผู้อุปถัมภ์</span> โดยได้ย้ายโรงเรียนมาก่อสร้างใหม่ในพื้นที่ด้านทิศตะวันตกของวัดบางช้างเหนือเนื่องจากจำนวนนักเรียน
เพิ่มมากขึ้นจึงจำเป็นต้องขยายพื้นที่ของอาคารเรียน

                  </span><br /><br /><br />
                  
                </p>
                </div>
                <div className='gallery'>
                  <div className='w-60 rounded-2xl overflow-hidden m-0 m-auto'>
                    <img src={monk1.src} alt='' />
                  </div>
                </div>
                
                </div>
                <br /><br /><br />
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 gallery'>
                <div className='img'>
                  <img src={schoolold5.src} alt={''} />
                </div>
                <div className='img'>
                  <img src={schoolold6.src} alt={''} />
                </div>
                <div className='img'>
                  <img src={schoolold7.src} alt={''} />
                </div>
                <div className='img'>
                  <img src={studentold1.src} alt={''} />
                </div>

              </div>
                
                
              </div>

              <br /><br /><br />

              <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>
              <div className='gallery'>
              <br /><br /><br /><br />
                  <div className='w-60 rounded-2xl overflow-hidden m-0 m-auto'>
                    <img src={monk2.src} alt='' />
                  </div>
                </div>
                <div className=''>
                <p className='text-lg'>
                  <span className='paragraph text-xl'>
                    <span>ปีพ.ศ.2544-ปัจจุบันโรงเรียนนาคประสิทธิ์มูลนิธิวัด บางช้างเหนืออยู่ในความอุปถัมภ์ของพระพิพัฒน์ศึกษากร
เจ้าอาวาสวัดบางข้างเหนือองค์ปัจจุบัน<br/></span>
                  </span>
                  <br /><br />
                  
                </p>
                <div className='grid grid-cols-2 gap-4 gallery'>
                <div className='img'>
                  <img src={coverSrc1.src} alt={''} />
                </div>
                <div className='img'>
                  <img src={coverSrc.src} alt={''} />
                </div>
                

              </div>
                </div>
                
                
                </div>

            </div>
          </section>
        </div>

      </main>

    </>
  )
}
