"use client"
import React, { useRef } from "react";

const WhatWeDo = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
  const items = [
    {
      title: "Thought Leadership",
      description:
        "As thought leaders, we build knowledge and perspectives and generate learning. Our multi- and cross-disciplinary experience affords us the ability to draw, process, and share insights across themes and sectors, enriching solutions through diverse lenses.",
      image: "/img/thought_leadership copy.png",
      alt: "Thought Leadership",
      reverse: false,
    },
    {
      title: "Build Synergies",
      description:
        "We understand that transformation and scale are not possible without partnerships and collaborations. We bridge the worlds of communities, practitioners, thinkers, and investors, and of programme and policy, bringing these together for scale and sustainability.",
      image: "/img/build_synergies copy.png",
      alt: "Build Synergies",
      reverse: true,
    },
    {
      title: "Catalyse Action",
      description:
        "Ethics, integrity, and execution excellence are the pathways towards action that demonstrate quality and dignity for communities. We provide mechanisms for partners in the social sector to remain firmly on these pathways.",
      image: "/img/catalyse_action copy.png",
      alt: "Catalyse Action",
      reverse: false,
    },
  ]

  return (
    <div  className="container mx-auto px-4 py-8 max-w-6xl"  id="whoAreWe" >
      <h2  className="text-center text-4xl  mb-8 text-[36px] ">What We Do</h2>
      <p className="text-center text-lg mb-12">
        The common threads across all our work, be it on health, climate,
        livelihoods, or social protection, have been:
      </p>

      {items.map((item, index) => (
        <div className="" key={index}>
          <div
            className={`flex flex-col md:flex-row items-center justify-center mb-12 ${
              item.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="">
              <img src={item.image} alt={item.alt} className="w-full" />
            </div>
            {/* Text Section */}
            <div className=" px-4 w-full pt-4">
              <h3 className="text-2xl  mb-4">{item.title}</h3>
              <p className="text-lg text-gray-700">{item.description}</p>
            </div>
          </div>
        </div>
      ))}

      <p className=" text-lg mb-3 text-start px-3">
        ICF strives to bring this thought leadership and impact creation to the
        attention of our global stakeholders, be they foundations and other
        donors, governments, or diaspora populations.
      </p>
      <p className="text-start text-lg px-3 ">Through our existing work and collaborations, ICF will impact the health and wealth of vulnerable communities globally.</p>
    </div>
 
  )
}

export default WhatWeDo
