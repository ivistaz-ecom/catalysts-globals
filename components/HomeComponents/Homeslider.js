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
      className={`${className} absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-black rounded-full cursor-pointer`}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  )
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-black rounded-full cursor-pointer`}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
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
      <div className="flex flex-col justify-center items">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col gap-10 lg:px-0 px-5">
            <div>
              <p className="container mx-auto text-center text-[36px] ">
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
                          className="text-black hover:underline text-[14px]"
                        >
                          READ MORE
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
