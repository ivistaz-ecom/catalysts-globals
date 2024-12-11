import React from "react"
import Image from "next/image"
import { imageData } from "@/app/utils/socialinequities.data"

export const Infograph = () => {
  return (
    <div className="bg-[#191d42]">
      <div className="max-w-[1366px] mx-auto lg:px-[83px] px-4 ">
        {/* Desktop View */}
        <div className="relative hidden lg:block h-[800px] overflow-hidden">
          {imageData.map((image, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-white/5"
              style={{
                top: image.top,
                left: image.left,
                width: "557px",
                height: "557px",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1000}
                height={1000}
                className="rounded-full w-60 h-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          ))}
          <div
            className="absolute top-[208px] left-[380px] w-[404px] h-[404px] rounded-full bg-[#191d42]/[.68] bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage:
                "url('http://catalysts.global/wp-content/themes/catalyst/img/circle.svg')",
            }}
          >
            <h2 className="text-white text-[14px] leading-[22px] px-4 md:px-[50px] py-4 md:pt-[90px] text-center">
              Social inequities are growing and societal problems are complex.
              No single approach can deliver results at a scale. Sustainable
              change and transformation integrate the strength of the community,
              efficiency of the market, the power of the state, and capacities
              of the facilitators. Sectoral systems of agriculture, health,
              education, etc., fundamental to social development, do not
              sufficiently focus or deliver outcomes for the poor and
              vulnerable.
            </h2>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block lg:hidden text-sm py-12 text-center">
          <p className="text-white">
            Social inequities are growing and societal problems are complex. No
            single approach can deliver results at a scale. Sustainable change
            and transformation integrate the strength of the community,
            efficiency of the market, the power of the state, and capacities of
            the facilitators. Sectoral systems of agriculture, health,
            education, etc., fundamental to social development, do not
            sufficiently focus or deliver outcomes for the poor and vulnerable.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Infograph
