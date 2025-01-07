import React from "react"
import Image from "next/image"
import Link from "next/link"

const VruttiBlock = () => {
  return (
    <div className="mb-16">
      <div className="bg-[#E3B45F] container mx-auto">
        <div className="bg-vrutti px-4 py-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <Image
                src="/img/vrutiblclogo.png"
                alt="Vrutti Logo"
                width={100}
                height={100}
                className="w-32 h-16 object-contain"
                id="vrutti"
              />
            </div>
            <div className="text-right">
              <Link
                href="https://vruttiimpactcatalysts.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white py-2 px-6 rounded "
              >
                Visit Site
              </Link>
            </div>
          </div>

          <div className="bg-white px-4 py-8 mt-8 flex flex-col md:flex-row md:space-x-8">
            {/* Left Column */}
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="md:text-[32px] text-[22px] bg-[#E3B45F] p-1 inline-block">
                Livelihood Impact Partner
              </h2>
              <p>
                <Link
                  href="https://vruttiimpactcatalysts.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Vrutti
                </Link>
                &nbsp;is a centre for sustainable livelihoods and enhancing
                people&apos;s well-being through knowledge, innovation, and
                transformative actions.
              </p>
              <h2 className="md:text-[32px] text-[22px] bg-[#E3B45F] p-1 inline-block">
                Est. 2004
              </h2>
              <h2 className="md:text-[32px] text-[22px] bg-[#E3B45F] p-1 inline-block">
                Direct Reach:
              </h2>
              <ul className="list-disc pl-5">
                <li>
                  53,500 smallholder producers; current year (2021-22) 42,500
                  intensive
                </li>
                <li>120,000 vulnerable women and transgenders</li>
                <li>25,000 artisanal fisherfolk</li>
                <li>9,000 MSMEs</li>
                <li>300 Nano women entrepreneurs</li>
              </ul>
              <p className="mt-4 italic border border-yellow-600 p-3">
                “We aim to improve the wealth and resilience of small producers
                through innovative projects.”
              </p>
            </div>

            {/* Right Column */}
            {/* Right Column */}
            <div className="w-full md:w-1/2 flex flex-wrap justify-between gap-8">
              <div className="flex flex-col items-center text-start w-full md:w-[45%]">
                <Image
                  src="/img/vrutti1.png"
                  alt="Vrutti Icon 1"
                  width={120}
                  height={120}
                  className="mb-4 w-32 h-32"
                />
                <h3 className=" text-2xl">3Fold Model (CORE IMPACT MODEL)</h3>
                <p>Building wealthy, resilient, and responsible farmers.</p>
              </div>
              <div className="flex flex-col items-center text-center w-full md:w-[45%]">
                <Image
                  src="/img/vrutti3.png"
                  alt="Vrutti Icon 3"
                  width={120}
                  height={120}
                  className="mb-4 w-32 h-32"
                />
                <h3 className=" text-2xl">V-Empower</h3>
                <p>
                  Enhancing growth, competitiveness, and sustainability of MSMEs
                  and women-owned businesses.
                </p>
              </div>
              <div className="flex flex-col items-center text-center w-full md:w-[45%]">
                <Image
                  src="/img/vrutti2.png"
                  alt="Vrutti Icon 2"
                  width={120}
                  height={120}
                  className="mb-4 w-32 h-32"
                />
                <h3 className=" text-2xl">
                  V-Life (Secured Life & Livelihoods)
                </h3>
                <p>
                  Financial and social security for the marginalized to reduce
                  vulnerability.
                </p>
              </div>
              <div className="flex flex-col items-center text-center w-full md:w-[45%]">
                <Image
                  src="/img/vrutti4.png"
                  alt="Vrutti Icon 4"
                  width={120}
                  height={120}
                  className="mb-4 w-32 h-32"
                />
                <h3 className=" text-2xl">FISHMARC</h3>
                <p>
                  Enhancing the wealth and resilience of artisanal fisherfolk
                  and effective fishery resource management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VruttiBlock
