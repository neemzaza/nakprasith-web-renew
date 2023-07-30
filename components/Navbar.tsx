import Link from 'next/link'
import NavigationJSON from './data/navigation.json'
import { useRouter } from 'next/router'
import { useEffect } from 'react';

import Logo from '../public/img/logo/Untitled.png'
import Image from 'next/image';

export default function Navbar() {

  const router = useRouter();

  const openNavMenu = () => {
    document.getElementById("nav-page")?.classList.add("opened")
    document.getElementById("nav-page")?.classList.remove("closed")
  }



  const closeNavMenu = () => {
    document.getElementById("nav-page")?.classList.add("closed")
    document.getElementById("nav-page")?.classList.remove("opened")
  }

  useEffect(() => {
    if (router.isReady) {
      closeNavMenu()
    }  
  }, [router])

  return (
    <div>
      <div className='closed nav-page full-page' id="nav-page">
        <a href="#" className='close-btn' onClick={closeNavMenu}><i className="bi bi-x-lg"></i></a>
        <ul className="page-nav-menu">

          {NavigationJSON.map((val, key) => (
            <li key={key} className={"page-nav-item " + (val.dropdown.length > 0 ? "dropdown " : "") + (router.pathname === val['link-to'] ? "active " : "")}>
              <Link href={val['link-to']} className='nav-link'><i className={"bi " + val['bootstrap-icon']}></i> {val.name}</Link>

              {(val.dropdown.length > 0) ? (
                <ul className='dropdown'>
                  {
                    val.dropdown.map((valin, keyin) => (
                      <li key={keyin} className='page-dropdown-item'>
                        <Link href={valin['link-to']} className='dropdown-link'>{valin.name}</Link>
                      </li>
                    ))
                  }

                </ul>
              )
                : <></>
              }

            </li>
          ))}

        </ul>
      </div>

      <nav className="navbar">
        <Link href="#" className='navbar-brand flex flex-row gap-3'><div className='logo'><Image src={Logo} sizes='100vw' priority alt='' /></div><div ><span>โรงเรียนนาคประสิทธิ์</span><br /><span>มูลนิธิวัดบางช้างเหนือ</span></div></Link>

        <ul className="nav-menu">

          {NavigationJSON.map((val, key) => (
            <li key={key} className={"nav-item " + (val.dropdown.length > 0 ? "dropdown " : "") + (router.pathname === val['link-to'] ? "active " : "")}>
              <Link href={val['link-to']} className='nav-link'><i className={"bi " + val['bootstrap-icon']}></i> {val.name}</Link>

              {(val.dropdown.length > 0) ? (
                <ul className='dropdown'>
                  {
                    val.dropdown.map((valin, keyin) => (
                      <li key={keyin} className='dropdown-item'>
                        <Link href={valin['link-to']} className='dropdown-link'>{valin.name}</Link>
                      </li>
                    ))
                  }

                </ul>
              )
                : <></>
              }

            </li>
          ))}

        </ul>

        <a className='nav-toggle' onClick={openNavMenu}><i className="bi bi-list"></i> เมนู</a>
      </nav>
    </div>
  )
}
