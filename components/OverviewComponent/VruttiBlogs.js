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
            <div className="text-right ">
              <Link
                href="https://vruttiimpactcatalysts.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white py-2 px-6 rounded"
              >
                Visit Site
              </Link>
            </div>
          </div>

          <div className="bg-white px-4 py-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
              <h2 className="md:text-[32px] text-[22px] bg-[#E3B45F]  p-1 inline-block ">Livelihood Impact Partner</h2>
                <br />
                <p>
                  <Link
                    href="https://vruttiimpactcatalysts.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    Vrutti
                  </Link>
                  is a centre for sustainable livelihoods and enhancing people&apos;s
                  well-being through knowledge, innovation and transformative
                  actions.
                </p>
                <br />
                <h2 className="md:text-[32px] text-[22px] bg-[#E3B45F]  p-1 inline-block ">Est. 2004</h2>
                <br />
                <br />
                <h2 className="md:text-[32px] text-[22px] bg-[#E3B45F]  p-1 inline-block ">Direct Reach:</h2>
                <br />
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
                <p className="mt-4 italic">
                  “We aim to improve the wealth and resilience of small
                  producers through innovative projects.”
                </p>
              </div>
              <div className="space-y-8">
                <div>
                  <Image
                    src="/img/vrutti1.png" // Replace with the correct image path
                    alt="Vrutti Icon 1"
                    width={120}
                    height={120}
                    className="mx-auto"
                  />
                  <h3>3Fold Model (CORE IMPACT MODEL)</h3>
                  <p>Building wealthy, resilient, and responsible farmers.</p>
                </div>
                <div>
                  <Image
                    src="/img/vrutti3.png" // Replace with the correct image path
                    alt="Vrutti Icon 3"
                    width={120}
                    height={120}
                    className="mx-auto"
                  />
                  <h3>V-Empower</h3>
                  <p>
                    Enhancing growth, competitiveness, and sustainability of
                    MSMEs and women-owned businesses.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <Image
                    src="/img/vrutti2.png" // Replace with the correct image path
                    alt="Vrutti Icon 2"
                    width={120}
                    height={120}
                    className="mx-auto"
                  />
                  <h3>V-Life (Secured Life & Livelihoods)</h3>
                  <p>
                    Financial and social security for the marginalized to reduce
                    vulnerability.
                  </p>
                </div>
                <div>
                  <Image
                    src="/img/vrutti4.png" // Replace with the correct image path
                    alt="Vrutti Icon 4"
                    width={120}
                    height={120}
                    className="mx-auto"
                  />
                  <h3>FISHMARC</h3>
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
    </div>
  )
}

export default VruttiBlock
