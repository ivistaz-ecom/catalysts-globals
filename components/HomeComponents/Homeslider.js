"use client"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"
import Link from "next/link"

import { slideData } from "@/app/utils/organisation-data"

const NextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "black",
        color:"black",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        padding: "6px",
      }}
      onClick={onClick}
    />
  )
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "black",
        color:"black",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        padding: "6px",
      }}
      onClick={onClick}
    />
  )
}

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      {/* <style>
        {`
            .slick-prev:before {
                content: '←';
                color: black;
                font-size: 30px;
            }
            .slick-next:before {
                content: '→';
                color: black;
                font-size: 30px;
            }
            `}
      </style> */}
      <div className="flex flex-col justify-center items">
        <div className="container mx-auto py-6">
          <div className="flex flex-col gap-10 lg:px-0 px-5">
            <div>
              <p className="container mx-auto text-center text-3xl ">
                The Catalyst Group of Organisations
              </p>
            </div>
            <div>
              <Slider {...settings}>
                {slideData.map((slide, index) => (
                  <div key={index} className="">
                    <div className=" flex flex-col justify-between items-stretch gap-6 p-5 m-2 rounded-xl shadow-md shadow-gray-400 h-full">
                      {/* Image Div */}
                      <div className="flex justify-center">
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          className="rounded-md h-20 w-auto"
                          width={600}
                          height={600}
                        />
                      </div>
                      {/* Content Div */}
                      <div>
                        <p className="text-sm text-gray-700">
                          {slide.description}
                        </p>
                      </div>
                      {/* Link Div */}
                      <div className="pt-14">
                        <Link
                          href={slide.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:underline"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
