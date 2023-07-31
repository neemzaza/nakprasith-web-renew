import { ScriptProps } from "next/script"
import { useEffect } from "react"


const Header = ({ title, label, coverSrc }: { title: string, label: string, coverSrc: string }) => {

  useEffect(() => {
    const header = document.getElementById("header");

    if (coverSrc.length > 0) {
      console.log(coverSrc)
      // @ts-ignore
      header.style.backgroundImage = "url('"+ coverSrc +"')";
    }

  }, [])

  return (
    <div className="header-first" id="header">
       <div className="container">
       <h1 className="title">{title}</h1> {/* แต่งกายเรียบร้อย ยิ้มง่าย ไหว้สวย */}
        <p>{label}</p> {/* อัตลักษณ์ของโรงเรียนนาคประสิทธิ์ มูลนิธิวัดบางช้างเหนือ */}
       </div>
    </div>
  )
}

export default Header