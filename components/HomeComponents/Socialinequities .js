import React from "react"
import Image from "next/image"

export const Infograph = () => {
  return (
    <div className="bg-[#191d42]">
      <div className="max-w-[1366px] mx-auto px-[83px]">
        {/* Desktop View */}
        <div className="relative hidden lg:block h-[800px] overflow-hidden">
          <div className="absolute top-[-153px] left-[306px] w-[557px] h-[557px] rounded-full bg-white/5">
            <Image
              src="/img/Highcompressed_30743360.jpg"
              alt="Infograph 1"
              width={250}
              height={250}
              className="rounded-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="absolute top-[47px] left-[589px] w-[557px] h-[557px] rounded-full bg-white/5">
            <Image
              src="/img/Highcompressed_30637766.jpg"
              alt="Infograph 2"
              width={250}
              height={250}
              className="rounded-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="absolute top-[363px] left-[493px] w-[557px] h-[557px] rounded-full bg-white/5">
            <Image
              src="/img/circle-image3.jpg"
              alt="Infograph 3"
              width={250}
              height={250}
              className="rounded-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="absolute top-[363px] left-[118px] w-[557px] h-[557px] rounded-full bg-white/5">
            <Image
              src="/img/Highcompressed_1256064279.jpeg"
              alt="Infograph 4"
              width={250}
              height={250}
              className="rounded-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="absolute top-[47px] left-[29px] w-[557px] h-[557px] rounded-full bg-white/5">
            <Image
              src="/img/Highcompressed_51874103.jpg"
              alt="Infograph 5"
              width={250}
              height={250}
              className="rounded-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div
            className="absolute top-[208px] left-[380px] w-[404px] h-[404px] rounded-full bg-[#191d42]/[.68] bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage:
                "url('http://catalysts.global/wp-content/themes/catalyst/img/circle.svg')",
            }}
          >
            <p className="text-[14px] leading-[22px] px-[50px] pt-[90px] text-white">
              Social inequities are growing and societal problems are complex.
              No single approach can deliver results at a scale. Sustainable
              change and transformation integrate the strength of the community,
              efficiency of the market, the power of the state, and capacities
              of the facilitators. Sectoral systems of agriculture, health,
              education, etc. fundamental to social development, do not
              sufficiently focus or deliver outcomes for the poor and
              vulnerable.
            </p>
          </div>
        </div>

        {/* Mobile View */}
        <div className=" block lg:hidden text-sm py-4  ">
          <p className=" text-white">
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
