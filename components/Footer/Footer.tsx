

import Image from "next/image"
import footerEffect from "public/svg/footer/footer.svg"
import Logo from 'public/img/logo/nakprasith.png'

import Link from "next/link"
import { useRouter } from "next/router"

export default function Footer() {
  const router = useRouter()


  return (
    <footer id="contact-us">
      {/* Effect */}
      {/* <div className="effect">
            <Image priority src={footerEffect}  className="footer-effect" alt="footer"/>
        </div> */}
      {/* Footer */}
      <section className="footer-zone bg-pink-300 after:text-pink-400">
        <div className="container-page z-50">
          <div className="child-center grid items-center gap-8 lg:grid-flow-col auto-cols-fr">
           
            <section className="contact">
            <br />
              <h1><i className="bi bi-geo-alt-fill"></i> ที่อยู่และเส้นทางการเดินทาง</h1>
              <br />
              <div className="eng">
                <b>
                  NAKPRASITH SCHOOL WAT BANGCHANGNUA FOUNDATION
                </b>
                <br />
                <p>97/1 Moo.3, Khlong Mai, Samphran, Nakhon Pathom 73110</p>
              </div>

              <br />

              <div className="eng">
                <b>
                  โรงเรียนนาคประสิทธิ์ มูลนิธิวัดบางช้างเหนือ
                </b>
                <br />
                <p>97/1 ม.3 ต. คลองใหม่ อ.สามพราน จ.นครปฐม 73110</p>
              </div>

              <br />

              <h2 className="text-2xl"><i className="bi bi-telephone-fill"></i> เบอร์โทรติดต่อ</h2>
              <div className="phone text-xl pl-10">
                <br />
                <p>034 311 263</p>
              </div>

              <br />

              <div className="social-media text-3xl flex gap-5">
                <Link href="/contact-us" target="_blank"><i className="bi bi-facebook transition-all hover:text-blue-700"></i></Link>
                <Link href="https://www.youtube.com/@-nakprasith9391" target="_blank"><i className="bi bi-youtube transition-all hover:text-red-700"></i></Link>
              </div>

            </section>
            <section className="map">
              <div className="card bg-white p-5 pb-0 max-w-[40rem] w-full rounded-3xl shadow-xl">

                <iframe className="rounded-2xl w-full h-80" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9184489746694!2d100.20247937576347!3d13.72338699794936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2ea67c61c2205%3A0x156e13e486cf65e!2z4LmC4Lij4LiH4LmA4Lij4Li14Lii4LiZ4LiZ4Liy4LiE4Lib4Lij4Liw4Liq4Li04LiX4LiY4Li04LmM!5e0!3m2!1sth!2sth!4v1697200142738!5m2!1sth!2sth" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <p className="text-center text-sm p-2 text-gray-500"><i className="bi bi-map-fill"></i> แผนที่การเดินทาง</p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="navigation bg-sky-500 text-white after:text-sky-600">
        <div className="p-5 pl-20">
        <Link href={"/"}><b className="underline">Home</b></Link> 
        {router.asPath.split("/").map((val, key) => (
            <Link href={val} key={key}> / <b>{val}</b></Link>
          ))}
        </div>
      </section>
      <section className="info-copyright bg-sky-300 after:text-sky-200">
        <div className="p-3">
          <div className="flex grid-col-3 justify-between">
            
            <a className="left-text flex gap-5"><div className="grayscale max-w-[1.5rem] w-full"><Image src={Logo} priority alt='' /></div> © {new Date().getFullYear()} Nakprasith School</a>
            <p className="right-text text-end">Created for Nakprasith School by <Link className="underline" href={"https://it-airwavy.netlify.app/"}>Sarut Ardnarong Np.78</Link></p>
          </div>
        </div>
      </section>

    </footer>
  )
}
