import React from "react"
import Image from "next/image"
import Link from "next/link"

const CmsBlock = () => {
  return (
    <div className="mb-16 ">
      <div className="bg-[#D7EEE8] px-4 py-8 container mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div>
            <Image
              src="/img/Cms/CMS.png"
              alt="CMS Logo"
              width={100}
              height={100}
              className="w-32 h-16 object-contain pb-4"
              id="cms"
            />
          </div>
          <div className="lg:mt-4 pb-4">
            <Link
              href="https://cms.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#80499D] text-white py-2 px-4 rounded-lg"
            >
              Visit Site
            </Link>
          </div>
        </div>

        <div className="bg-white px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="md:text-[32px] text-[22px] bg-[#D7EEE8] p-1 inline-block ">
                Solution &amp; Development
              </h2>
              <br /> <br />
              <h2 className="md:text-[32px] text-[22px] bg-[#D7EEE8]  p-1 inline-block ">
                Investment Firm
              </h2>
              <br />
              <p className="mt-8">
                <Link
                  href="https://solvists.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  CMS
                </Link>&nbsp;
                specialises in solving problems with change agents through
                effective actions and growth solutions for scale, impact, and
                sustainability. We are a global powerhouse that accelerates the
                Scale, Impact, and Sustainability of change agents who affect
                SDGs.
              </p>
              <p className="mt-8 mb-8">
                At&nbsp;
                <Link
                  href="https://solvists.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  CMS
                </Link>
                , we do not stop at temporary fixes; we are focused on providing
                sustainable solutions that create scalable social impact. The
                world knows us as CMS, but at our core, we are ‘Solvists’.
              </p>
              <h2 className="md:text-[32px] text-[22px] bg-[#D7EEE8]  p-1  inline-block ">
                An Investment Reimagined Approach
              </h2>
              <p className="mt-8">
                We like to see ourselves as Solution-focused activists –
                ‘Solvists’. Working closely with partners, we incubate and
                invest with a rare mix of resources, deep expertise, and
                on-ground experience, shaping social equity, working across SDG
                goals.
              </p>
            </div>
            <div>
              <Image
                src="/img/Cms/cms-block-img.fe41b791854c7762cae3.png" // Use the direct URL here
                alt="CMS Initiatives"
                width={400}
                height={400}
                className="block"
              />
              <br />
              <h2 className="md:text-[32px] text-[22px] bg-[#D7EEE8] inline-block p-1">
                Est. 1994
              </h2>

              <ul className="mt-5">
                <li>1000+ engagements</li>
                <li>500+ organizations in development mentored</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue p-6 text-center">
              <Image
                src="/img/Cms/cmsicon-1.png" // Use the direct URL here
                alt="icon 1"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <p>
                <b>Co-Invest in success of key change agents</b>
              </p>
              <p>
                Leverage resources for effective action while addressing complex
                issues.
              </p>
            </div>
            <div className="bg-blue p-6 text-center">
              <Image
                src="/img/Cms/cmsicon2.png" // Use the direct URL here
                alt="icon 2"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <p>
                <b>Raise and shape investments</b>
              </p>
              <p>
                Secure higher value for investments made, through growth-driven
                solutions.
              </p>
            </div>
            <div className="bg-blue p-6 text-center">
              <Image
                src="/img/Cms/cmsicon3.png" // Use the direct URL here
                alt="icon 3"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <p>
                <b>Invest in scalable solutions</b>
              </p>
              <p>
                Incubate and scale sectoral solutions which deliver value and
                returns.
              </p>
            </div>
          </div>

          <p className="text-center mt-6 mb-6">
            This ‘Unlocking Value to Invest in Impact’ framework brings alive
            our living intelligence to enhance social equity.
          </p>

          <video
            src="https://catalysts.global/wp-content/plugins/elementor/assets/images/placeholder.png"
            autoPlay
            loop
            controls
            className="w-full"
          ></video>
        </div>
      </div>
    </div>
  )
}
export default CmsBlock
