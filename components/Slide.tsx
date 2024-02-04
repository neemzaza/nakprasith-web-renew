import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import React, { useEffect } from 'react'

import errorImg from 'public/img/cover/cover1.jpg';

interface imginfo {
    imgsrc: string,
    alt: string
}

export default function Slide({ imginfo, wrapAround, autoPlay }: { imginfo: Array<imginfo>, wrapAround: Boolean, autoPlay: Boolean }) {

    // useEffect(() => {
    //     var elem: any = document.querySelector(".main-carousel");
    //     var flkty = new Flickity(elem, {
    //         // options
    //         cellAlign: 'left',
    //         contain: true
    //     });

    //     // element argument can be a selector string
    //     //   for an individual element
    //     var flkty = new Flickity('.main-carousel', {
    //         // options
    //     });
    // }, [])

    // useEffect(() => {
        
    // }, [])

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            </Head>
            <main>
                <div className="carousel"
                    data-flickity={'{ "lazyLoad": true, "autoPlay": ' + autoPlay + ', "wrapAround": ' + wrapAround + ', "imagesLoaded": true, "percentPosition": true }'}>
                    {imginfo.map((val, key) => (
                        <span key={key}>
                            <div className="carousel-cell">
                                 {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img className="carousel-cell-image"
                                    src={val.imgsrc} data-flickity-lazyload={val.imgsrc} alt={val.alt} />
                            </div>

                            <div className="description">
                                <span>{val.alt.split('{br}').map((thisval, thiskey) => (
                                    <p key={thiskey}>{thisval}</p>
                                ))}</span>
                            </div>
                        </span>
                    ))}



                </div>


            </main>
            <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></Script>
        </>
    )
}
