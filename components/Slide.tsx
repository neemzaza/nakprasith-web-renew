import Head from 'next/head'
import Script from 'next/script'
import React, { useEffect } from 'react'

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

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            </Head>
            <main>
                <div className="carousel"
                    data-flickity={'{ "lazyLoad": true, "autoPlay": ' + autoPlay + ', "wrapAround": ' + wrapAround + ', "imagesLoaded": true, "percentPosition": false }'}>
                    {imginfo.map((val, key) => (
                        <span key={key}>
                            <div className="carousel-cell">
                                <img className="carousel-cell-image"
                                    src={val.imgsrc} data-flickity-lazyload={val.imgsrc} alt={val.alt} />
                            </div>

                            <div className="description">
                                <p>{val.alt}</p>
                            </div>
                        </span>
                    ))}



                </div>


            </main>
            <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></Script>
        </>
    )
}
