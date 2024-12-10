import React from "react"
import { foundations } from "@/app/utils/partners-data"
const Foundations = () => {
  return (
    <div className="bg-white py-8">
      <h2 className="lg:px-16 text-xl font-semibold">Foundations</h2>
      <div className="bg-white py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-8 md:px-16">
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
      </div>
    </div>
  )
}

export default Foundations
