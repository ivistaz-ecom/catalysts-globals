import React from "react"
import {
  corporatePartners,
  foundations,
  developments,
  social,
  universities,
  networks,
  bilaterals,
  multilaterals,
  government,
} from "@/app/utils/partners-data"

const PartnersSection = () => {
  return (
    <div className="bg-white py-4 pt-36 container mx-auto px-2">
      {/* Corporate Partners Section */}
      <h1 className="text-[36px]  text-center mb-6">Partners</h1>
      <p className="text-left text-gray-600 mb-8  px-4">
        We work with organisations at the local, national, regional and global
        levels. Our partners play a huge part in supporting the work we do,
        helping us deliver to those who need it the most. Strategic alliances
        reinforce our work on impact programs across the breadth of themes we
        work on.
      </p>
      <h2 className="px-4 text-[22px]">Corporates</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 py-4">
        {corporatePartners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center border p-4 hover:shadow-lg"
          >
            <img
              src={partner.img}
              alt={`Corporate Partner ${index + 1}`}
              className="max-h-24 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Foundations Section */}
      <h3 className=" px-4 text-[22px]">Foundations</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 py-4">
        {foundations.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center border p-4 hover:shadow-lg"
          >
            <img
              src={partner.img}
              alt={`foundation ${index + 1}`}
              className="max-h-24 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Developments banks */}
      <h3 className=" px-4 text-[22px]">Developments banks</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 py-4">
        {developments.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center border p-4 hover:shadow-lg"
          >
            <img
              src={partner.img}
              alt={`developments ${index + 1}`}
              className="max-h-24 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Social Purpose Organisations / Impact Organisation */}
      <h3 className=" px-4 text-[22px]">
        Social Purpose Organisations / Impact Organisation
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 py-4">
        {social.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center border p-4 hover:shadow-lg"
          >
            <img
              src={partner.img}
              alt={`social ${index + 1}`}
              className="max-h-24 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Universities */}
      <h3 className=" px-4 text-[22px]">Universities</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 py-4">
        {universities.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center border p-4 hover:shadow-lg"
          >
            <img
              src={partner.img}
              alt={`universities ${index + 1}`}
              className="max-h-24 object-contain"
            />
          </div>
        ))}
      </div>

      {/*Networks */}
      <h2 className=" px-4 text-[22px]">Networks</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 py-4">
        {networks.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center border p-4 hover:shadow-lg"
          >
            <img
              src={partner.img}
              alt={`networks ${index + 1}`}
              className="max-h-24 object-contain"
            />
          </div>
        ))}
      </div>

      {/*  Bilaterals */}
      <h3 className=" px-4 text-[22px]">Bilaterals</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 py-4">
        {bilaterals.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center border p-4 hover:shadow-lg"
          >
            <img
              src={partner.img}
              alt={`bilaterals ${index + 1}`}
              className="max-h-24 object-contain"
            />
          </div>
        ))}
      </div>

      {/*  multilaterals */}
      <h3 className=" px-4 text-[22px]">Multi Laterals</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 py-4">
        {multilaterals.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center border p-4 hover:shadow-lg"
          >
            <img
              src={partner.img}
              alt={`multilaterals ${index + 1}`}
              className="max-h-24 object-contain"
            />
          </div>
        ))}
      </div>

      {/*  multilaterals */}
      <h3 className=" px-4 text-[22px]">Government Agencies</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 py-4">
        {government.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center border p-4 hover:shadow-lg"
          >
            <img
              src={partner.img}
              alt={`government ${index + 1}`}
              className="max-h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PartnersSection
