import React from "react"
import Image from "next/image"
import Link from "next/link"

const UpfrontBlock = () => {
  return (
    <div className=" mb-16">
      <div className="bg-upfront px-4 py-8 container mx-auto border border-gray-200 ">
        <div className="flex items-center justify-between gap-4">
          <div>
            <Image
              src="/img/upfrontlogo-tr.png" // Replace with the correct image path
              alt="Upfront Logo"
              width={100}
              height={100}
              className="w-44 h-16 object-contain "
              id="upfront"
            />
          </div>
          <div className="text-right">
            <Link
              href="https://upfront.global"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white py-2 px-6 rounded"
            >
              Visit Site
            </Link>
          </div>
        </div>

        <div className="bg-white px-4 py-8 mt-8">
          <p>
            Working to improve the lives and work of front line workers by
            changing mindsets and behaviours, as well as enhancing financial
            security and the “systems” they work with. To achieve this, we focus
            on building agency, ensuring voices & choices and establishing
            partnerships & collaborations.
          </p>
          <p className="mb-8">
            Creating a positive impact on the ecosystem for front line workers,
            using a systems change approach to improve knowledge, skills and
            services. This is achieved through a platform that aggregates
            solutions and providers, ensuring that workers have access to the
            resources they need to thrive.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="md:text-[32px] text-[22px] bg-[#E0343D] text-white p-1 inline-block ">
                Estd. 2022
              </h2>
              <br />
              <br />
              <h2 className="md:text-[32px] text-[22px] bg-[#E0343D] text-white p-1 inline-block ">
                Our Reach:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div>
                  <ul className="list-disc pl-5">
                    <li>5,07,670 Construction workers</li>
                    <li>33,58,040 Women sex workers</li>
                    <li>2,30,204 Factory workers</li>
                    <li>4,53,522 Informal workers</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc pl-5">
                    <li>899 Healthcare providers</li>
                    <li>30,03,585 Farmers</li>
                    <li>3,06,811 Fisherfolk</li>
                    <li>3,47,481 Street vendors</li>
                  </ul>
                </div>
              </div>
              <br />
              <br />
              <h2 className="md:text-[32px] text-[22px] bg-[#E0343D] text-white p-1 inline-block ">
                Approaches and Methods
              </h2>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="mx-auto">
                  <Image
                    src="/img/Image-31.png" // Replace with correct image path
                    alt="Unit 1"
                    width={200}
                    height={500}
                    className="lg:w-36 lg:h-36 mx-auto"
                  />
                </div>
                <div className="mx-auto">
                  <Image
                    src="/img/Image-32.png"
                    alt="Unit 2"
                    width={200}
                    height={500}
                    className="lg:w-36 lg:h-36 mx-auto"
                  />
                </div>
                <div className="mx-auto">
                  <Image
                    src="/img/Image-33.png"
                    alt="Unit 3"
                    width={200}
                    height={500}
                    className="lg:w-36 lg:h-36 mx-auto"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="mx-auto">
                  <Image
                    src="/img/Image-34.png"
                    alt="Unit 4"
                    width={200}
                    height={500}
                    className="lg:w-36 lg:h-36 mx-auto"
                  />
                </div>
                <div className="mx-auto">
                  <Image
                    src="/img/Image-35.png"
                    alt="Unit 5"
                    width={200}
                    height={500}
                    className="lg:w-36 lg:h-36 mx-auto"
                  />
                </div>
                <div className="mx-auto">
                  <Image
                    src="/img/Image-36.png"
                    alt="Unit 6"
                    width={200}
                    height={500}
                    className="lg:w-36 lg:h-36 mx-auto"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="mx-auto">
                  <Image
                    src="/img/Image-37.png"
                    alt="Unit 7"
                    width={200}
                    height={500}
                    className="lg:w-36 lg:h-36 mx-auto"
                  />
                </div>
                <div className="mx-auto">
                  <Image
                    src="/img/Image-38.png"
                    alt="Unit 8"
                    width={200}
                    height={500}
                    className="lg:w-36 lg:h-36 mx-auto"
                  />
                </div>
                <div className="mx-auto">
                  <Image
                    src="/img/Image-39.png"
                    alt="Unit 9"
                    width={200}
                    height={500}
                    className="lg:w-36 lg:h-36 mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 redborderbox border border-red-500 p-4">
            <div className="lg:border-r border-red-500 px-4 py-8">
              <div className="lg:flex items-center ">
                <div className="mr-4">
                  <Image
                    src="/img/fist.png"
                    alt="Icon Fist"
                    width={70}
                    height={70}
                    className="lg:mx-auto lg:w-16 h-16  "
                  />
                </div>
                <div className="text-left">
                  <h4 className=" mt-4 text-2xl">Workforce empowerment</h4>
                </div>
              </div>
              <ul className="mt-4 pl-5 list-disc marker:text-red-500 text-black lg:pt-7">
                <li>Building voice &amp; agency</li>
                <li>Access to resources, products &amp; services</li>
                <li>Research &amp; evaluation</li>
              </ul>
            </div>

            <div className="lg:border-r border-red-500 px-4 py-8">
              <div className="lg:flex items-center">
                <div className="mr-4">
                  <Image
                    src="/img/hands.png" // Replace with the correct image path
                    alt="Icon Hands"
                    width={70}
                    height={70}
                    className="lg:mx-auto lg:w-20 h-16"
                  />
                </div>
                <div className="text-left">
                  <h4 className=" text-2xl mt-4">
                    Enabling safe & inclusive systems
                  </h4>
                </div>
              </div>
              <ul className="mt-4 pl-5 list-disc marker:text-red-500 text-black lg:pt-7">
                <li>Strengthen workplace systems</li>
                <li>Aggregation of services &amp; solutions</li>
                <li>Building capacities &amp; perspectives</li>
              </ul>
            </div>

            <div className="px-4 py-8 lg:-mt-4">
              <div className="lg:flex items-center">
                <div className="mr-4">
                  <Image
                    src="/img/palms.png" // Replace with the correct image path
                    alt="Icon Palms"
                    width={70}
                    height={70}
                    className="lg:mx-auto lg:w-32 h-16"
                  />
                </div>
                <div className="text-left">
                  <h4 className=" text-2xl mt-4">
                    Collaborative, ecosystem-based &amp; worker-centric approach
                  </h4>
                </div>
                <div className="min-h-10"></div>
              </div>
              <ul className="mt-4 pl-5 list-disc marker:text-red-500 text-black">
                <li>Collaborations</li>
                <li>Partnerships</li>
                <li>Policy shaping</li>
                <li>Advocacy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpfrontBlock
