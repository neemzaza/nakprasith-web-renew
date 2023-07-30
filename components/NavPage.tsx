import Link from 'next/link'
import NavigationJSON from './data/navigation.json'
import { useRouter } from 'next/router'

export default function NavPage() {

    const router = useRouter();

    const openNavMenu = () => {
      document.getElementById("nav-page")?.classList.add("opened")
    }

    

    const closeNavMenu = () => {
      document.getElementById("nav-page")?.classList.add("closed")
    }

    return (
        // <div className='nav-page full-page' id="nav-page">
        //     <a href="#" className='close-btn' onClick={closeNavMenu}><i className="bi bi-x-lg"></i></a>
        //     <ul className="page-nav-menu">

        //         {NavigationJSON.map((val, key) => (
        //             <li key={key} className={"page-nav-item " + (val.dropdown.length > 0 ? "dropdown " : "") + (router.pathname === val['link-to'] ? "active " : "")}>
        //                 <Link href={val['link-to']} className='nav-link'><i className={"bi " + val['bootstrap-icon']}></i> {val.name}</Link>

        //                 {(val.dropdown.length > 0) ? (
        //                     <ul className='dropdown'>
        //                         {
        //                             val.dropdown.map((valin, keyin) => (
        //                                 <li key={keyin} className='page-dropdown-item'>
        //                                     <Link href={valin['link-to']} className='dropdown-link'>{valin.name}</Link>
        //                                 </li>
        //                             ))
        //                         }

        //                     </ul>
        //                 )
        //                     : <></>
        //                 }

        //             </li>
        //         ))}

        //     </ul>
        // </div>
        <></>
    )
}
/*
<li className='nav-item active'>
            <Link href="#" className='nav-link'><i className="bi bi-house-fill"></i> หน้าแรก</Link>
          </li>
          <li className='nav-item dropdown '>
            <Link href="#" className='nav-link'><i className="bi bi-buildings-fill"></i> แนะนำโรงเรียน</Link>

            <ul className='dropdown'>
              <li className='dropdown-item'>
                <Link href="#" className='dropdown-link'>ประวัติโรงเรียน</Link>
              </li>
              <li className='dropdown-item'>
                <Link href="#" className='dropdown-link'>ข้อมูลทั่วไป</Link>
              </li>
              <li className='dropdown-item'>
                <Link href="#" className='dropdown-link'>ผู้บริหาร</Link>
              </li>
            </ul>
          </li>

          <li className='nav-item dropdown '>
            <Link href="#" className='nav-link'><i className="bi bi-journal-album"></i> แผนกต่างๆ</Link>

            <ul className='dropdown'>
              <li className='dropdown-item'>
                <Link href="#" className='dropdown-link'>แผนกอนุบาล</Link>
              </li>
              <li className='dropdown-item'>
                <Link href="#" className='dropdown-link'>แผนกประถมศึกษา</Link>
              </li>
              <li className='dropdown-item'>
                <Link href="#" className='dropdown-link'>แผนกมัธยม</Link>
              </li>
              <li className='dropdown-item'>
                <Link href="#" className='dropdown-link'>วิทยาลัยเทคโนโลยีนาคประสิทธิ์บริหารธุรกิจ</Link>
              </li>
            </ul>
          </li>
          <li className='nav-item'>
            <Link href="#" className='nav-link'><i className="bi bi-book"></i> สืบค้นหนังสือห้องสมุด</Link>
          </li>
          <li className='nav-item'>
            <Link href="#" className='nav-link'><i className="bi bi-headset"></i> ติดต่อเรา</Link>
          </li>
*/
