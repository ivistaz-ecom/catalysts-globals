import React from "react"
import {  corporatePartners,foundations,developments,social,universities,networks,bilaterals,multilaterals,government } from "@/app/utils/partners-data"

const PartnersSection = () => {
  return (
    <div className="bg-white py-8 pt-36">
      {/* Corporate Partners Section */}
      <h2 className="text-3xl  text-center mb-6">Partners</h2>
      <p className="text-left text-gray-600 mb-8 lg:px-16 px-4">
        We work with organisations at the local, national, regional and global
        levels. Our partners play a huge part in supporting the work we do,
        helping us deliver to those who need it the most. Strategic alliances
        reinforce our work on impact programs across the breadth of themes we
        work on.
      </p>
      <h2 className="lg:px-16 px-4 text-xl font-semibold">Corporates</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-8 md:px-16 py-8">
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
      <h2 className="lg:px-16 px-4 text-xl font-semibold">Foundations</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-8 md:px-16 py-8">
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
      <h2 className="lg:px-16 px-4 text-xl font-semibold">Developments banks</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-8 md:px-16 py-8">
        { developments.map((partner, index) => (
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
       <h2 className="lg:px-16 px-4 text-xl font-semibold">Social Purpose Organisations / Impact Organisation</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-8 md:px-16 py-8">
        { social.map((partner, index) => (
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
        <h2 className="lg:px-16 px-4 text-xl font-semibold">Universities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-8 md:px-16 py-8">
        { universities.map((partner, index) => (
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
        <h2 className="lg:px-16 px-4 text-xl font-semibold">Networks</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-8 md:px-16 py-8">
        { networks.map((partner, index) => (
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
       <h2 className="lg:px-16 px-4 text-xl font-semibold">Bilaterals</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-8 md:px-16 py-8">
        { bilaterals.map((partner, index) => (
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
         <h2 className="lg:px-16 px-4 text-xl font-semibold">Multi Laterals</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-8 md:px-16 py-8">
        { multilaterals.map((partner, index) => (
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
      <h2 className="lg:px-16 px-4 text-xl font-semibold">Government Agencies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-8 md:px-16 py-8">
        { government.map((partner, index) => (
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
