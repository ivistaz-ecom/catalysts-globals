"use client"
import React, { useRef } from "react";
import Image from "next/image";

const WhereWeWork = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <div
        className="relative bg-cover bg-center lg:w-full flex flex-col justify-between text-center px-4 "
        style={{
          backgroundImage: "url('/img/globe-dotted copy.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto text-center py-16 text-white" id="WhereWeWork">
          <h2 className="text-[36px]  mb-4">Where we work</h2>
          <p className="text-lg leading-relaxed mb-8">
            We work across the domains of livelihood, health, and Wellbeing for
            the Workforce with deep experience in policy, research,
            implementation, monitoring, capacity building, strategy, and
            documentation. We have been working across India and have a global
            footprint in 25 countries.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="p-4 rounded-md shadow-md">
              <Image
                src="/img/green.png"
                alt="Green Foundation"
                className="w-60 sm:w-52 md:w-72 lg:w-80 h-auto mx-auto"
                width={1000}
                height={1000}
              />
            </div>
            <div className="p-4 rounded-md shadow-md">
              <Image
                src="/img/swasti copy.png"
                alt="Swasti - The Health Catalyst"
                className="w-60 sm:w-52 md:w-72 lg:w-80 h-auto mx-auto"
                width={1000}
                height={1000}
              />
            </div>
            <div className="p-4 rounded-md shadow-md">
              <Image
                src="/img/vrutti.png"
                alt="Vrutti - Livelihood Impact Partners"
                className="w-60 sm:w-52 md:w-72 lg:w-80 h-auto mx-auto"
                width={1000}
                height={1000}
              />
            </div>
            <div className="p-4 rounded-md shadow-md">
              <Image
                src="/img/CAC-logo.png"
                alt="Community Action Collab"
                className="w-60 sm:w-52 md:w-72 lg:w-80 h-auto mx-auto"
                width={1000}
                height={1000}
              />
            </div>
            <div className="p-4 rounded-md shadow-md">
              <Image
                src="/img/upfront copy.png"
                alt="Upfront - Placing Workforce Wellbeing"
                className="w-60 sm:w-52 md:w-72 lg:w-80 h-auto mx-auto"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhereWeWork;
