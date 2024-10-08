import Link from 'next/link'
import NavigationJSON from '../public/data/navigation.json'
import InfoJSON from '../public/data/info.json'

import { useRouter } from 'next/router'
import React, { useEffect } from 'react';

import Logo from 'public/img/logo/nakprasith.png'
import Image from 'next/image';
import Script from 'next/script';
import axios from 'axios';


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

  useEffect(() => {

    const fetchData = async () => {
      const res = await axios.get('/api/getinfo')  

      return res;
    }
    

    let name1 = document.getElementById("name1");
    let name2 = document.getElementById("name2");

    fetchData().then((res) => {
      let upperText1 = res.data['school-eng-name-1'].toUpperCase();
      //@ts-ignore
      name1.innerText = upperText1;
  
      let upperText2 = res.data['school-eng-name-2'].toUpperCase();
       //@ts-ignore
      name2.innerText = upperText2;
    })

   

    let navbar = document.getElementById("navbar")

    let upScroll = scrollY;
    document.addEventListener("scroll", () => {
      let downScroll = scrollY;
      
      if (upScroll < 1140) {
        navbar?.classList.remove("mini");
      }

      if (upScroll < downScroll) {
        navbar?.classList.add("mini");
      } else {
        navbar?.classList.remove("mini");
      }

      upScroll = downScroll;
      
    })

    


  }, [])

  return (
    <div>
      

      {/* NAV-PAGE WHEN ON MOBILE DEVICE */}
      <div className='closed nav-page full-page' id="nav-page">
        <a href="#" className='close-btn' onClick={closeNavMenu}><i className="bi bi-x-lg"></i></a>
        <ul className="page-nav-menu">

          {NavigationJSON.map((val, key) => (
            <li key={key} className={"page-nav-item " + (val.dropdown.length > 0 ? "dropdown " : "") + (router.pathname === val['link-to'] ? "active " : "")}>
              <Link href={val['link-to']} className='nav-link '><i className={"bi " + val['bootstrap-icon']}></i> {val.name}</Link>

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

      {/* NAVBAR MAIN (BAR) */}
      <nav className="navbar " id="navbar">
        <Link href="#" className='navbar-brand flex flex-row gap-3'><div className='logo'><Image src={Logo} sizes='100vw' priority alt='' /></div><div ><span className='span1 min-[300px]:text-xs min-[800px]:text-md lg:text-lg' id="name1">Loading...</span><br /><span className='span2 min-[300px]:text-[.5rem] min-[800px]:text-md lg:text-xs' id="name2"></span></div></Link>

        <ul className="nav-menu">

          {NavigationJSON.map((val, key) => (
            <li key={key} className={"nav-item " + (val.dropdown.length > 0 ? "dropdown " : "") + (router.pathname === val['link-to']  ? "active " : "") + (router.pathname.includes(val.code) ? "active" : "")}>
              <Link href={val['link-to']} className='nav-link'><i className={"bi " + val['bootstrap-icon']}></i> {val.name}</Link>

              {(val.dropdown.length > 0) ? (
                <ul className='dropdown'>
                  <p className='menu-main-name'><i className={"bi " + val['bootstrap-icon']}></i> {val.name}</p>
                  {
                    val.dropdown.map((valin, keyin) => (
                      <li key={keyin} className={'dropdown-item '+ (router.pathname === valin['link-to']  ? "active " : "")}>
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

        <a className='nav-toggle' onClick={openNavMenu}><i className="bi bi-list"></i> Menu</a>
      </nav>
    </div>
  )
}
