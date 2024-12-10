import React from "react"
import Image from "next/image"

const Homepage = () => {
  return (
    <div
      className="relative bg-cover bg-center lg:w-full sm:h-[100vh] h-[70vh] flex flex-col justify-between text-center px-4"
      style={{
        backgroundImage: "url('/img/hero-bg.png')",
      }}
    >
      {/* Mobile-specific Gradient Overlay */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(226, 0, 91, 0.8) 0%, rgba(98, 47, 136, 0.8) 33%, rgba(0, 69, 52, 0.8) 66%, rgba(232, 170, 50, 0.8) 100%)",
          zIndex: 1,
        }}
      ></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1">
        <Image
          src="/catalyst-global-logo.6f016a59c010e128e74a746ca04c226d.svg"
          alt="Catalyst Foundation"
          className="sm:w-1/4 w-1/2 h-auto mb-4"
          width={1000}
          height={1000}
        />
        <h1 className="text-white text-lg pt-5 w-full mx-auto leading-9 text-shadow-md">
          Catalyst Foundation is a social enterprise platform that seeks to
          promote health and wealth of vulnerable communities.
        </h1>
        <div className="absolute bottom-10 w-full flex justify-center">
          <a
            href="/organisations"
            className=" px-10 py-3 bg-[#1F2445] text-white text-[12px] font-medium rounded-full shadow-lg "
          >
            FIND OUT MORE
          </a>
        </div>
      </div>
    </div>
  )
}

export default Homepage
