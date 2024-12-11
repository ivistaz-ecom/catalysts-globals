"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"

import { organisations } from "@/app/utils/organisations.data"
const Organisations = () => {
  return (
    <div>
      <h1 className="text-[36px] text-center p-10 pt-36">Our Organisations</h1>
      {organisations.map((org, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-stretch h-auto border-b-[1px] lg:mb-0 mb-4"
        >
          {/* Left Column - Logo */}
          <div
            className="w-full md:w-1/4 flex justify-center items-center p-8"
            style={{ background: org.bgColor }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={org.logoSrc}
                alt={`${org.name} Logo`}
                className="object-cover"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          {/* Middle Column - Text */}
          <div className="w-full md:w-1/2 p-8 text-gray-700 bg-[#F7F5F9] flex flex-col justify-center">
            <h2 className="text-2xl">{org.name}</h2>
            <p className="text-xl">{org.year}</p>
            {org.description.map((text, i) => (
              <p key={i} className="mt-4 text-[14px]">
                {text}
              </p>
            ))}
            <Link
              href={org.link}
              className="inline-block mt-6 px-4 py-2 md:w-1/4 w-1/2 text-center border border-black text-[#191D42] rounded-full underline"
              target="_blank"
            >
              Visit Website
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-1/4 bg-gray-200">
            <Image
              src={org.rightImage}
              alt={`${org.name} Image`}
              className="object-cover w-full h-full"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Organisations
