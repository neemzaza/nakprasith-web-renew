import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'

import { Carousel } from 'react-bootstrap';



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

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any, e:any) => {
        setIndex(selectedIndex);
    }

    return (
        <>
            {/* <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            </Head> */}
            {/* <Head>
                        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossOrigin="anonymous"
            />
            </Head> */}
            <main>
                <Carousel activeIndex={index} onSelect={handleSelect}>

                {imginfo.map((val, key) => (
                        <Carousel.Item key={key}>
                            {/* < className="carousel-cell"> */}
                                 {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img className="carousel-cell-image"
                                    src={val.imgsrc} data-flickity-lazyload={val.imgsrc} alt={val.alt} />
                            {/* </> */}
                            <img className="carousel-bg-image"
                                    src={val.imgsrc} data-flickity-lazyload={val.imgsrc} alt={val.alt} />

                            <Carousel.Caption className="description">
                                <span>{val.alt.split('{br}').map((thisval, thiskey) => (
                                    <p key={thiskey}>{thisval}</p>
                                ))}</span>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}


                </Carousel>

            </main>
            <Script  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"></Script>
        </>
    )
}
