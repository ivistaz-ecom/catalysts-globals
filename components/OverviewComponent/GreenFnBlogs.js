import React from "react"
import Image from "next/image"
import Link from "next/link"

const GreenFnBlock = () => {
  return (
    <div className="mb-16 ">
      <div className="bg-[#FFD590] container mx-auto ">
        <div className="bg-greenfn px-4 py-8">
        <div className="flex items-center justify-between gap-4">
            <div>
              <Image
                src="/img/Green_foundation_logo.png" 
                alt="Green Foundation Logo"
                width={100}
                height={100}
                className="w-32 h-28 object-contain "
                id="greenfoundation"
              />
            </div>
            <div className="text-right">
              <Link
                href="https://greenfoundation.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white py-2 px-6 rounded"
              >
                Visit Site
              </Link>
            </div>
          </div>

          <div className="bg-white px-4 py-8 ">
          <h2 className="md:text-[32px] text-[22px] bg-[#FED590]  p-1 inline-block ">
              Genetic, Resource, Ecology, Energy and Nutrition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <p className="pt-5">
                  <Link
                    href="https://greenfoundation.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    GREEN Foundation
                  </Link>
                  &nbsp;works towards building a well-preserved ecosystem diversity
                  for the sustainable rural livelihoods of the present
                  generation without eroding the resource base of the future.
                </p>
                <p>
                  GF&apos;s approach has evolved to a more comprehensive bio-region
                  microsystem – called regenerative communities – bringing
                  together the Agri/Food and Health systems to ensure the wealth
                  and well-being of people and the planet.
                </p>
                <br />
                <h2 className="md:text-[32px] text-[22px] bg-[#FED590]  p-1 inline-block ">Est. 1994</h2>
                <br />
                <br />
                <h2 className="md:text-[32px] text-[22px] bg-[#FED590]  p-1 inline-block ">Direct Reach:</h2><br /><br />
                <ul className="list-disc pl-5">
                  <li>2,400 women farmers (about 10,000 people)</li>
                  <li>14 enterprise groups</li>
                  <li>One Farmer Producer Organization</li>
                </ul>
              </div>
              <div>
                <Image
                  src="/img/green-poster.png" 
                  alt="Green Foundation Poster"
                  width={600}
                  height={400}
                  className="w-[450px] h-[550px] lg:mt-[-40px] lg:ps-24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GreenFnBlock
